<script setup lang="ts">
import { nextTick, ref } from "vue";
import { useScroll } from "@vueuse/core";
import { asText } from "@prismicio/client";
import { components } from "~/slices";
import EmphasisText from "~/components/EmphasisText.vue";
import TitleText from "~/components/TitleText.vue";
import ParagraphText from "~/components/ParagraphText.vue";
import LinkText from "~/components/LinkText.vue";


const prismic = usePrismic();
const route = useRoute();
const { data: page } = await useAsyncData("formulaires_" + (route.params.uid as string), () =>
  prismic.client.getByUID("formulaires", route.params.uid as string),
);

useSeoMeta({
  title: page.value?.data.meta_title,
  description: page.value?.data.meta_description,
  ogTitle: page.value?.data.meta_title,
  ogDescription: page.value?.data.meta_description,
  ogImage: page.value?.data.meta_image.url,
});

const { y } = useScroll(window)
const formElement = ref<HTMLFormElement | null>(null);
const formFieldsKey = ref(0);
const isSubmitting = ref(false);
const submitError = ref("");
const submitted = ref(false);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

watch(y, (newY) => {
  const btn = document.getElementById("btn-back-to-top");
  if (!btn) return;

  if (newY > 300) {
    btn.classList.remove("!hidden");
  } else {
    btn.classList.add("!hidden");
  }
});

function setNestedValue(target: Record<string, unknown>, path: string[], value: unknown) {
  const [key, ...remainingPath] = path;
  if (!key || ["__proto__", "prototype", "constructor"].includes(key)) return;

  if (remainingPath.length === 0) {
    target[key] = value;
    return;
  }

  if (typeof target[key] !== "object" || target[key] === null || Array.isArray(target[key])) {
    target[key] = Object.create(null) as Record<string, unknown>;
  }

  setNestedValue(target[key] as Record<string, unknown>, remainingPath, value);
}

async function onSubmit() {
  const form = formElement.value;
  if (!form || isSubmitting.value) return;

  submitError.value = "";
  submitted.value = false;
  form.querySelectorAll<HTMLInputElement>("input[name]").forEach((input) => {
    input.dispatchEvent(new Event("form-validate", { bubbles: true }));
  });
  await nextTick();

  const invalidField = form.querySelector<HTMLElement>('[aria-invalid="true"]');
  if (invalidField) {
    invalidField.scrollIntoView({ behavior: "smooth", block: "center" });
    (invalidField instanceof HTMLInputElement ? invalidField : invalidField.querySelector("input"))?.focus();
    return;
  }

  const submitUrl = import.meta.dev
    ? "http://localhost:7071/api/subscribe"
    : page.value?.data.submit_url?.trim();
  if (!submitUrl) {
    submitError.value = "L'URL de soumission n'est pas configurée.";
    return;
  }

  const feedbackEmailPath = page.value?.data.feedback_user_email?.trim();
  const feedbackEmailSegments = feedbackEmailPath?.split(".");
  if (!feedbackEmailPath || feedbackEmailSegments?.some((segment) => !segment)) {
    submitError.value = "Le champ email à transmettre n'est pas configuré.";
    return;
  }

  const formPayload = Object.create(null) as Record<string, unknown>;
  const processedRadioNames = new Set<string>();
  const inputs = Array.from(form.querySelectorAll<HTMLInputElement>("input[name]"));
  const fieldsByName = new Map<string, { label: string; value: string }>();
  let feedbackEmail: string | undefined;

  for (const input of inputs) {
    let value = input.value;
    if (input.type === "radio") {
      if (processedRadioNames.has(input.name)) continue;
      processedRadioNames.add(input.name);
      value = inputs.find((candidate) => candidate.name === input.name && candidate.type === "radio" && candidate.checked)?.value ?? "";
    }

    const path = input.name.split(".");
    if (path.some((segment) => !segment)) continue;
    const field = {
      label: input.dataset.fieldLabel ?? "",
      value,
    };
    if (input.name === feedbackEmailPath) {
      feedbackEmail = value;
      fieldsByName.set(input.name, field);
      continue;
    }

    fieldsByName.set(input.name, field);
    setNestedValue(formPayload, path, {
      ...field,
    });
  }

  if (feedbackEmail === undefined) {
    submitError.value = "Le champ email configuré est introuvable dans le formulaire.";
    return;
  }

  const sections: { title: string; fields: string[] }[] = [];
  let currentSection: { title: string; fields: string[] } | undefined;

  for (const slice of page.value?.data.slices ?? []) {
    if (slice.slice_type === "form_section") {
      currentSection = {
        title: asText(slice.primary.title),
        fields: [],
      };
      sections.push(currentSection);
      continue;
    }

    if (slice.slice_type !== "form_content") continue;

    const fieldName = slice.primary.technical_id?.trim();
    if (!fieldName) continue;

    const field = fieldsByName.get(fieldName);
    if (!field) continue;

    if (!currentSection) {
      currentSection = {
        title: "",
        fields: [],
      };
      sections.push(currentSection);
    }

    currentSection.fields.push(fieldName);
  }

  const payload = {
    metadata: { email: feedbackEmail, sections },
    form: formPayload,
  };

  isSubmitting.value = true;
  try {
    const response = await fetch(submitUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error(`Submission failed: ${response.status}`);
    submitted.value = true;
    formFieldsKey.value++;
  } catch (error) {
    console.error(error);
    submitError.value = "L'envoi a échoué, veuillez réessayer.";
  } finally {
    isSubmitting.value = false;
  }
}

</script>

<template>
  <main class="flex flex-wrap  mx-auto">
    <button type="button" class="button-variant !fixed bottom-5 end-5 py-4 px-4 h-10 w-10 !hidden" id="btn-back-to-top"
      @click="scrollToTop">
      <Icon name="ph:arrow-up-bold" class="w-10 h-10" />
    </button>
    <div class="mx-auto" v-if="page?.data.body">
      <PrismicRichText :field="page.data.body"
        :components="{ em: EmphasisText, paragraph: ParagraphText, heading2: TitleText, hyperlink: LinkText }" />
    </div>
    <form ref="formElement" novalidate class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto" @submit.prevent="onSubmit">
      <SliceZone :key="formFieldsKey" :slices="page?.data.slices ?? []" :components="components" />
      <p v-if="submitted" class="col-span-full text-center text-2xl font-bold text-sky-300 animate-pulse motion-reduce:animate-none" role="status">
        Votre formulaire a bien été envoyé, vérifiez vos emails.
      </p>
      <p v-if="submitError" class="col-span-full text-center text-red-700" role="alert">{{ submitError }}</p>
      <button type="submit" class="button-variant col-span-full" :disabled="isSubmitting">
        {{ isSubmitting ? "Envoi en cours..." : "Envoyer le formulaire" }}
      </button>
    </form>
  </main>
</template>

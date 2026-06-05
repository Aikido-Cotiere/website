<script setup lang="ts">
import type { Content } from "@prismicio/client";
import { required, minLength, date as dateRule, nativeEnum, boolean, email as emailRule, oneOf, regex, numeric, exactLength } from "@regle/rules";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(getSliceComponentProps<Content.SubscriptionFormSlice>(
	["slice", "index", "slices", "context"]
));

const { r$ } = useRegle({
	adherent: {
		name: '',
		surname: '',
		birthDate: undefined,
		sex: undefined
	},
	contact: {
		address: '',
		postalCode: '',
		city: '',
		email: '',
		phone: '',
		emmergencyContact: ''
	},
	child: {
		firstParent: '',
		secondParent: ''
	},
	consent: true,
	aikido: {
		howKnown: undefined,
		oldDojo: '',
		epa: '',
	},
	medicalData: {
		concerns: '',
		hospital: ''
	}
}, {
	adherent: {
		name: { required, minLength: minLength(1) },
		surname: { required, minLength: minLength(1) },
		birthDate: { required },
		sex: { required, oneOf: oneOf(['Homme', 'Femme']) },
	},
	contact: {
		address: { required, minLength: minLength(1) },
		postalCode: { required, minLength: exactLength(5), numeric },
		city: { required, minLength: minLength(1) },
		email: { required, emailRule: withMessage(emailRule, "L'adresse email est invalide") },
		phone: { required, regex: withMessage(regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/), "Le téléphone est invalide") },
		emmergencyContact: { required, regex: withMessage(regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/), "Le téléphone est invalide") }
	},
	child: {
		firstParent: { required, minLength: minLength(1) },
		secondParent: { required, minLength: minLength(1) }
	},
	consent: { required, boolean },
	aikido: {
		howKnown: { oneOf: oneOf([""]) },
		oldDojo: {},
		epa: {},
	},
	medicalData: {
		concerns: {},
		hospital: {}
	}
})

const ok = ref(false)
const fail = ref(false)
const submitting = ref(false)

async function onSubmit() {
	submitting.value = true
	ok.value = false
	fail.value = false
	const { valid, data } = await r$.$validate()
	if (valid) {
		const url = 'https://api.aikido-traditionnel-cotiere.com/api/subscribe'
		//const url = 'http://localhost:7071/api/subscribe'

		try {
			const response = await fetch(url, {
				body: JSON.stringify(data),
				method: 'POST',
				mode: "cors"
			})
			if (response.ok) {
				ok.value = true
				r$.$reset()
			}
		} catch (err) {
			console.error(err)
			fail.value = true
		}

	}
	submitting.value = false
}

</script>

<template>
	<the-bounded :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation" class="relative">
		<form class="flex flex-col gap-5" @submit.prevent="onSubmit">
			<h2 class="mx-auto max-w-3xl text-balance text-2xl font-medium md:text-5xl">
				<span>Information de l'adhérent</span>
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
				<input-field label="Nom" placeholder="Nom de famille de l'adhérent" :field="r$.adherent.name" />
				<input-field label="Prénom" placeholder="Prénom de l'adhérent" :field="r$.adherent.surname" />
				<input-field label="Date de naissance" placeholder="Date de naissance de l'adhérent"
					:field="r$.adherent.birthDate" type="date" icon="mdi-calendar" />
				<select-option-tab label="sexe" name="sexe" :options="['Homme', 'Femme']" :field="r$.adherent.sex" />
			</div>

			<h2 class="mx-auto max-w-3xl text-balance text-2xl font-medium md:text-5xl">
				<span>Information de contact</span>
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
				<input-field label="Adresse" :field="r$.contact.address" icon="mdi-map" />
				<input-field label="Code postal" :field="r$.contact.postalCode" icon="mdi-map" />
				<input-field label="Ville" :field="r$.contact.city" icon="mdi-map" />
				<input-field label="Courriel" :field="r$.contact.email" icon="mdi-email" />
				<input-field label="Téléhone" :field="r$.contact.phone" icon="mdi-phone" />
				<input-field label="Téléphone (à contacter en cas d'urgence)" icon="mdi-phone-alert"
					:field="r$.contact.emmergencyContact" type="phone" />
			</div>

			<h2 class="mx-auto max-w-3xl text-balance text-2xl font-medium md:text-5xl">
				<span>Pratiquants mineurs</span>
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
				<input-field label="Nom et prénom du 1er parent" :field="r$.child.firstParent"
					icon="mdi-account-star" />
				<input-field label="Nom et prénomdu 2è parent" :field="r$.child.secondParent" icon="mdi-account-star" />
			</div>

			<h2 class="mx-auto max-w-3xl text-balance text-2xl font-medium md:text-5xl">
				<span>Consentement</span>
			</h2>
			<div class="grid grid-cols-1 gap-2">
				<toogle-switch
					label="En cochant cette case, vous autorisez le dojo à publier des photos où le pratiquant apparaît sur son site ou ses médias de communication (Facebook, articles de presse ...) *"
					:field="r$.consent" />
			</div>

			<h2 class="mx-auto max-w-3xl text-balance text-2xl font-medium md:text-5xl">
				<span>Niveau de pratique</span>
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
				<input-field label="Comment avez-vous connu le dojo ?" :field="r$.aikido.howKnown" />
				<input-field label="Ancien dojo (si vous avez déjà pratiqué à l'EPA)" :field="r$.aikido.oldDojo" />
				<input-field label="Numéro EPA" :field="r$.aikido.epa" />
			</div>

			<h2 class="mx-auto max-w-3xl text-balance text-2xl font-medium md:text-5xl">
				<span>Données médicales (facultatif)</span>
			</h2>
			<span>Vous pouvez renseigner cette partie si vous souhaitez communiquer des informations aux encadrants en
				cas de problème</span>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
				<input-field label="Antécédents médicaux" :field="r$.medicalData.concerns" />
				<input-field label="Etablissement hospitalier à privilégier en cas d'urgence"
					:field="r$.medicalData.hospital" />
			</div>
			<span v-if="ok" class="text-2xl text-sky-300 animate-pulse  text-center">Votre demande d'inscription a
				bien été prise
				en compte
				!</span>
			<span v-if="!fail" class="text-2xl text-red-300 animate-pulse  text-center">Votre demande d'inscription a
				échouée, veuillez réessayer. Si le problème persiste, merci de nous contacter par mail directement à
				l'adresse <a class="text-sky-700 font-bold"
					href="mailto:insciption-manuelle@aikido-traditionnel-cotiere.com">insciption-manuelle@aikido-traditionnel-cotiere.com</a>
				en nous communiquant <a class="text-sky-700 font-bold" href="/Form_inscription.pdf" download>ce
					formulaire</a>
				rempli en pièce
				jointe
				!</span>
			<button class="
			button-variant
			cursor-pointer
			mx-auto
			block md:inline-flex 
			min-h-11 px-3 md:px-unset
			text-3xl md:text-base 
			first:mt-8 md:first:mt-0
			md:items-center   
			" type="submit" :disabled="submitting">M'inscrire !</button>

		</Form>
	</the-bounded>
</template>
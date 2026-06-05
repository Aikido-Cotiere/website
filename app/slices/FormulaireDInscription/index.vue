<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.SubscriptionFormSlice>(
	["slice", "index", "slices", "context"]
));

const name = ref('')
const surname = ref('')
const date = ref('')
const sexe = ref('Homme')

const address = ref('')
const postalCode = ref('')
const city = ref('')
const email = ref('')
const phone = ref('')
const emmergencyContact = ref('')

const firstParent = ref('')
const secondParent = ref('')

const consent = ref(false)

const known = ref('')
const oldDojo = ref('')
const epa = ref('')
const ista = ref('')

const medicalConcerns = ref('')
const hospital = ref('')

async function sendEmail() {
	const body = {
		adherent: {
			name: name.value,
			surname: surname.value,
			birthDate: date.value,
			sex: sexe.value
		},
		contact: {
			address: address.value,
			postalCode: postalCode.value,
			city: city.value,
			email: email.value,
			phone: phone.value,
			emmergencyContact: emmergencyContact.value
		},
		child: {
			fisrtParent: firstParent.value,
			secondParent: secondParent.value
		},
		consent: consent.value,
		aikido: {
			howKnown: known.value,
			oldDojo: oldDojo.value,
			epa: epa.value,
			ista: ista.value
		},
		medicalData: {
			concerns: medicalConcerns.value,
			hospital: hospital.value
		}
	}

	const url = 'https://api.aikido-traditionnel-cotiere.com/api/subscribe'
	//const url = 'http://localhost:7071/api/subscribe'
	const response = await fetch(url, {
		body: JSON.stringify(body),
		method: 'POST',
		mode: "cors"
	})
}

</script>

<template>
	<the-bounded :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation" class="relative">
		<form class="flex flex-col gap-5" @submit.prevent="sendEmail">
			<h2 class="mx-auto max-w-3xl text-balance text-2xl font-medium md:text-5xl">
				<span>Information de l'adhérent</span>
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
				<input-field label="Nom" placeholder="Nom de famille de l'adhérent" v-model="name" required />
				<input-field label="Prénom" placeholder="Prénom de l'adhérent" v-model="surname" required />
				<input-field label="Date de naissance" placeholder="Date de naissance de l'adhérent" v-model="date"
					type="date" icon="mdi-calendar" required />
				<select-option-tab label="sexe" name="sexe" :options="['Homme', 'Femme']" v-model="sexe" required />
			</div>

			<h2 class="mx-auto max-w-3xl text-balance text-2xl font-medium md:text-5xl">
				<span>Information de contact</span>
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
				<input-field label="Adresse" v-model="address" icon="mdi-map" required />
				<input-field label="Code postal" v-model="postalCode" icon="mdi-map" required />
				<input-field label="Ville" v-model="city" icon="mdi-map" required />
				<input-field label="Courriel" v-model="email" type="email" icon="mdi-email" required />
				<input-field label="Téléhone" v-model="phone" type="phone" icon="mdi-phone" required />
				<input-field label="Téléphone (à contacter en cas d'urgence)" icon="mdi-phone-alert"
					v-model="emmergencyContact" type="phone" required />
			</div>

			<h2 class="mx-auto max-w-3xl text-balance text-2xl font-medium md:text-5xl">
				<span>Pratiquants mineurs</span>
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
				<input-field label="Nom et prénom du 1er parent" v-model="firstParent" icon="mdi-account-star"
					required />
				<input-field label="Nom et prénomdu 2è parent" v-model="secondParent" icon="mdi-account-star"
					required />
			</div>

			<h2 class="mx-auto max-w-3xl text-balance text-2xl font-medium md:text-5xl">
				<span>Consentement</span>
			</h2>
			<div class="grid grid-cols-1 gap-2">
				<toogle-switch
					label="En cochant cette case, vous autorisez le dojo à publier des photos où le pratiquant apparaît sur son site ou ses médias de communication (Facebook, articles de presse ...) *"
					v-model="consent" />
			</div>

			<h2 class="mx-auto max-w-3xl text-balance text-2xl font-medium md:text-5xl">
				<span>Niveau de pratique</span>
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
				<input-field label="Comment avez-vous connu le dojo ?" v-model="known" />
				<input-field label="Ancien dojo (si vous avez déjà pratiqué à l'EPA)" v-model="oldDojo" />
				<input-field label="Numéro EPA" v-model="epa" />
				<input-field label="Numéro ISTA" v-model="ista" />
			</div>

			<h2 class="mx-auto max-w-3xl text-balance text-2xl font-medium md:text-5xl">
				<span>Données médicales (facultatif)</span>
			</h2>
			<span>Vous pouvez renseigner cette partie si vous souhaitez communiquer des informations aux encadrants en
				cas de problème</span>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
				<input-field label="Antécédents médicaux" v-model="medicalConcerns" />
				<input-field label="Etablissement hospitalier à privilégier en cas d'urgence" v-model="hospital" />
			</div>

			<button class="
			button-variant 
			mx-auto
			block md:inline-flex 
			min-h-11 px-3 md:px-unset
			text-3xl md:text-base 
			first:mt-8 md:first:mt-0
			md:items-center   
			cursor-pointer" type="submit">M'inscrire !</button>

		</form>
	</the-bounded>
</template>
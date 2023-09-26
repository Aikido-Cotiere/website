<template>
  <v-card variant="flat" class="bg-transparent">
    <v-card-title class="text-h4">Nouveau pratiquant (n'ayant jamais été inscrit à ATC)</v-card-title>
    <v-card-text>
      <p>Vous renseignez en ligne le formulaire d'inscription <router-link to="/inscription">(Inscrivez-vous ...)</router-link> et validez votre saisie.</p>
      <p>
        Nous imprimons le formulaire et vous le faisons passer lors d'un prochain entraînement pour validation et signature. L'inscription ne sera définitive qu'après règlement de la licence et de la
        cotisation et fourniture du certificat médical.
      </p>
      <v-card variant="flat" class="bg-transparent">
        <v-card-title class="text-h5">Pièces à fournir</v-card-title>
        <v-card-text>
          <v-card variant="flat" class="bg-transparent">
            <v-card-title class="text-h6"> Impérativement pour le premier cours, y compris le cours d'essai</v-card-title>
            <v-card-text>
              <v-list density="compact" class="bg-transparent">
                <v-list-subheader>Pour les adultes</v-list-subheader>
                <v-list-item prepend-icon="mdi-circle-small">Certificat médical obligatoire, précisant « aptitude à l'aïkido ».</v-list-item>
                <v-list-subheader> Pour les mineurs</v-list-subheader>
                <v-list-item prepend-icon="mdi-circle-small">Téléchargez et renseignez le questionnaire médical, à dater et signer par un représentant légal</v-list-item>
                <v-list-item prepend-icon="mdi-circle-small">Si vous répondez positivement à un des points de ce questionnaire, vous devrez fournir un certificat médical</v-list-item>
                <v-list-subheader> Pour tous</v-list-subheader>
                <v-list-item prepend-icon="mdi-circle-small"
                  >Renseigner le formulaire d'inscription en ligne (le bulletin « papier » vous sera remis en cas d'inscription définitive pour signature)</v-list-item
                >
                <v-list-item prepend-icon="mdi-circle-small">Règlement de la licence (le chèque sera débité uniquement en cas d'inscription définitive)</v-list-item>
              </v-list>
            </v-card-text>
          </v-card>

          <v-card variant="flat" class="bg-transparent">
            <v-card-title> Au cours suivant</v-card-title>
            <v-card-text>
              <v-list density="compact" class="bg-transparent">
                <v-list-item prepend-icon="mdi-circle-small">Règlement de la cotisation</v-list-item>
              </v-list>
            </v-card-text>
          </v-card>

          <v-card variant="flat" class="bg-transparent">
            <v-card-title> Sur le passeport</v-card-title>
            <v-card-text>
              <v-list density="compact" class="bg-transparent">
                <v-list-item prepend-icon="mdi-circle-small">une photo d'identité sera à coller sur le passeport lorsqu'on vous le remettra (pour les nouveaux pratiquants).</v-list-item>
              </v-list>
            </v-card-text>
          </v-card>

          <p class="text-blue"></p>
          <v-btn size="small" variant="outlined" href="/Renseignements_202008.pdf" download>Imprimer cette fiche de renseignements</v-btn>
        </v-card-text>
      </v-card>

      <v-card variant="flat" class="bg-transparent">
        <v-card-title class="text-h4">Réinscription (pratiquant déjà enregistré)</v-card-title>
        <v-card-text>
          <p>Vous renseignez en ligne le formulaire de réinscription <router-link to="/reinscription">(Réinscription)</router-link> et validez votre saisie.</p>
          <v-card variant="flat" class="bg-transparent">
            <v-card-title class="text-h5">Pièces à fournir</v-card-title>
            <v-card-text>
              <v-card variant="flat" class="bg-transparent">
                <v-card-title class="text-h6"> Impérativement pour le premier cours</v-card-title>
                <v-card-text>
                  <v-list density="compact" class="bg-transparent">
                    <v-list-item prepend-icon="mdi-circle-small"
                      >Le certificat médical, précisant « aptitude à l'aïkido » est valable 3 ans s'il ne comporte pas de mention limitative de durée ; par exemple, un certificat médical établi en
                      2019 devra être renouvelé en 2022. S'il est toujours valide, téléchargez et renseignez le
                      <v-btn variant="outlined" size="small" href="/QS_ATC.pdf" download>Questionnaire de santé</v-btn>, à dater et signer (par un représentant légal pour les pratiquants mineurs).
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-circle-small">Règlement de la cotisation</v-list-item>
                    <v-list-item prepend-icon="mdi-circle-small">Passeport EPA</v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-card-text>
          </v-card>
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>

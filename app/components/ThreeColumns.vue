<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="3">
        <slot name="left" mdc-unwrap="p" />
      </v-col>
      <v-col>
        <slot name="default" mdc-unwrap="p" />
      </v-col>
      <v-col cols="12" md="3">
        <slot name="right" mdc-unwrap="p" />
      </v-col>
    </v-row>
  </v-container>
</template>

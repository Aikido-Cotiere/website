<template>
    <v-app-bar class="title" color="red-darken-4" lazy-img="/main-banner.jpg" scroll-behavior="hide">
        <template #title>
            <v-app-bar-title class="d-flex justify-center">
                <span class="text-wrap " :class="{ 'text-display-large': !isMobile }">AÏKIDO TRADITIONNEL DE
                    LA CÔTIERE</span>
            </v-app-bar-title>
        </template>
        <template #prepend>
            <v-img width="50" src="/main-logo.jpg" to="/" />
        </template>
        <template #append>
            <v-app-bar-nav-icon v-if="isMobile" color="white" variant="text" @click.stop="$emit('menuClicked')" />
        </template>
    </v-app-bar>
</template>

<script setup lang="ts">
const props = defineProps<{
    isMobile?: boolean;
}>();
const emits = defineEmits<{
    (e: 'menuClicked'): void
}>();
</script>

<style lang="scss" scoped>
.title {
    box-shadow: 0 5px 10px rgb(94, 0, 0);
    background-color: rgb(94, 0, 0);

    span {
        font-family: Gang of Three !important;
    }
}
</style>
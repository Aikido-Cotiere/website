<template>
  <PrismicLink class="hover:underline text-teal-500 cursor-pointer" :field="$attrs.node.data">
    <slot />
  </PrismicLink>
</template>

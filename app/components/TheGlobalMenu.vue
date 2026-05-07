<template>
  <v-list :lines="false" nav dense density="compact">
    <template v-for="group in groups" :key="group.group">
      <v-list-subheader v-if="group.group" class="align-center">{{ group.group }}</v-list-subheader>
      <v-list-item v-for="item in group.items" :key="item.path" :prepend-icon="item.icon?.toString() ?? 'mdi-help'" :title="item.menu?.toString()" :to="{ path: item.path }" exact />
      <v-divider v-if="group.items.length > 0" />
    </template>
  </v-list>
</template>

<script lang="ts" setup>
import type { ContentNavigationItem } from '@nuxt/content';

const { data } = await useAsyncData('navigation', () => {
  return (
    queryCollectionNavigation('pages', ['title', 'icon', 'group', 'menu'])
      //.where('draft', '=', false)
      //.where('partial', '=', false)
      .order('group', 'ASC')
  );
});

const groups = computed(() => {
  const grouped = data.value?.reduce(
    (acc, item) => {
      // Helper function to process an item and its children recursively
      function processItem(it: ContentNavigationItem, group: string) {
        if (it.menu) {
          if (!acc[group]) {
            acc[group] = [];
          }
          acc[group].push(it);
        }
        if (Array.isArray(it.children) && it.children.length > 0) {
          it.children.forEach((child) => processItem(child, child.group?.toString() || group));
        }
      }
      processItem(item, item.group?.toString() || '');
      return acc;
    },
    {} as Record<string, typeof data.value>
  );
  const safeGrouped = grouped ?? [];
  const menus = Object.entries(safeGrouped).map(([group, items]) => ({
    group,
    items,
  }));

  const premièreInscriptionMenu: ContentNavigationItem = {
    path: '/inscriptions/premiere',
    title: 'Première inscription',
    icon: 'i-mdi-account-plus',
    menu: 'Première inscription',
  };
  const reInscriptionMenu: ContentNavigationItem = {
    path: '/inscriptions/reinscription',
    title: 'Réinscription',
    icon: 'i-mdi-account-check',
    menu: 'Réinscription',
  };

  const inscriptionsMenu = menus.find((m) => m.group === 'Inscriptions');
  if (!inscriptionsMenu) {
    menus.push({
      group: 'Inscriptions',
      items: [premièreInscriptionMenu, reInscriptionMenu],
    });
  } else {
    inscriptionsMenu.items.push(premièreInscriptionMenu, reInscriptionMenu);
  }

  return menus;
});
</script>

<style></style>

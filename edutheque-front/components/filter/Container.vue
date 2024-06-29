<script setup lang="ts">
const filters = [
  {
    label: "Histoire",
    icon: "i-heroicons-book-open",
  },
  {
    label: "Techno",
    icon: "i-heroicons-calculator",
  },
  {
    label: "Français",
    icon: "i-heroicons-book-open",
  },
  {
    label: "SVT",
    icon: "i-heroicons-beaker",
  },
];
</script>

<template>
  <UContainer class="mt-4 flex justify-center gap-3">
    <FilterButton
      v-for="filter in filters"
      :key="filter.label"
      :label="filter.label"
      :icon="filter.icon"
    />
  </UContainer>
</template>

<style scoped></style>

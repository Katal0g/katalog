<script setup lang="ts">
import { type Ressource } from "~/models";
import { generateResources } from "~/utils/faker";

const length = 20;
const ressources = ref<Ressource[]>(generateResources(length));
</script>

<template>
  <UContainer class="mt-6 flex flex-wrap justify-center gap-6">
    <RessourceCard
      v-for="ressource in ressources"
      :key="ressource.title"
      :ressource="ressource"
    />
  </UContainer>
</template>

<style scoped></style>

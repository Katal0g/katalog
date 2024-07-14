<script setup lang="ts">
import { type Resource } from "~/models";
import { generateResources } from "~/utils/faker";

const length = 20;
const resources = ref<Resource[]>([]);

onMounted(() => {
  resources.value = generateResources(length);
});
</script>

<template>
  <UContainer class="mt-6 flex flex-wrap justify-center gap-6 max-w-9xl">
    <ResourceCard
      v-for="resource in resources"
      :key="resource.title"
      :resource="resource"
    />
  </UContainer>
</template>

<style scoped></style>

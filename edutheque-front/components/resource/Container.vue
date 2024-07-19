<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { GitLabProject, Resource } from "~/models";
import {convertToResource} from "~/utils/convert";

// Define refs for resources and repositories
const resources = ref<Resource[]>([]);
const repositories = ref<GitLabProject[]>([]);

onMounted(async () => {
  try {
    const response = await $fetch<GitLabProject[]>("/api/get-repositories");
    repositories.value = response;
    resources.value.push(...response.map(convertToResource));
  } catch (error) {
    console.error("Error generating content:", error);
  }
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
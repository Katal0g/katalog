<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import ResourceContainer from "~/components/resource/Container.vue";
import ResearchContainer from "~/components/research/Container.vue";
import type { Resource, GitLabProject } from "~/models";
import { convertToResource } from "~/utils/convert";

const resources = ref<Resource[]>([]);
const repositories = ref<GitLabProject[]>([]);
const page = ref(1);
const perPage = 30;
const totalItems = ref(0);
const searchParams = ref({ query: "" });
const loading = ref(true);
const queryTime = ref(0);
const resultCount = ref(0);

interface ApiResponse {
  data: GitLabProject[];
  paginationInfo: {
    total: number;
  };
}

const fetchRepositories = async () => {
  loading.value = true;
  const startTime = performance.now();

  try {
    const response = await $fetch<ApiResponse>("/api/get-repositories", {
      params: {
        page: page.value,
        perPage: perPage,
        query: searchParams.value.query,
      },
    });
    repositories.value = response.data;
    resources.value = response.data.map(convertToResource);
    totalItems.value = response.paginationInfo.total;
    resultCount.value = response.data.length; // Set result count
  } catch (error) {
    console.error("Error fetching repositories:", error);
  } finally {
    const endTime = performance.now(); // End timer
    queryTime.value = (endTime - startTime) / 1000; // Calculate query time in seconds
    loading.value = false;
  }
};

const handleSearch = (params: { query: string }) => {
  searchParams.value = params;
  page.value = 1;
  fetchRepositories();
};

onMounted(fetchRepositories);
</script>

<template>
  <div class="pb-4">
    <ResearchContainer
      :onSearch="handleSearch"
      :loading="loading"
      :total-items="totalItems"
      :query-time="queryTime"
    />
    <UDivider class="my-2" />
    <ResourceContainer
      :resources="resources"
      :page="page"
      :totalItems="totalItems"
      :loading="loading"
      :onPageChange="fetchRepositories"
      @update:page="page = $event"
    />
  </div>
</template>

<style scoped></style>

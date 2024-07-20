<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import ResourceContainer from '~/components/resource/Container.vue';
import ResearchContainer from '~/components/research/Container.vue';
import type { Resource, GitLabProject } from '~/models';
import { convertToResource } from '~/utils/convert';

const resources = ref<Resource[]>([]);
const repositories = ref<GitLabProject[]>([]);
const page = ref(1);
const perPage = 25;
const totalItems = ref(0);
const searchParams = ref({ query: '' });
const loading = ref(true); // Add loading state
const queryTime = ref(0); // Add query time
const resultCount = ref(0); // Add result count

interface ApiResponse {
  data: GitLabProject[];
  paginationInfo: {
    total: number;
  };
}

const fetchRepositories = async () => {
  loading.value = true;
  const startTime = performance.now(); // Start timer

  try {
    const response = await $fetch<ApiResponse>('/api/get-repositories', {
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
    console.error('Error fetching repositories:', error);
  } finally {
    const endTime = performance.now(); // End timer
    queryTime.value = (endTime - startTime) / 1000; // Calculate query time in seconds
    loading.value = false;
  }
};

const handleSearch = (params: { query: string }) => {
  searchParams.value = params;
  page.value = 1; // Reset to first page when searching
  fetchRepositories();
};

onMounted(fetchRepositories);

watch(page, fetchRepositories);
</script>

<template>
  <div class="mb-4">
    <ResearchContainer :onSearch="handleSearch" :loading="loading" :total-items="totalItems" :query-time="queryTime" />
    <UDivider class="my-2" />
    <ResourceContainer
        :resources="resources"
        :page="page"
        :totalItems="totalItems"
        :loading="loading"
        :onPageChange="fetchRepositories"
    />
  </div>
</template>

<style scoped></style>
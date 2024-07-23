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

const query = ref("");

const handleSearch = (params: { query: string }) => {
  searchParams.value = params;
  page.value = 1;
  fetchRepositories();
};

onMounted(fetchRepositories);

watch(page, fetchRepositories);
</script>

<template>
  <div class="pb-4">
    <ResearchContainer>
      <template #searchBar>
        <UFormGroup class="w-full">
          <UInput
            size="lg"
            v-model="query"
            :placeholder="$t('utils.simpleSearch')"
            @keyup.enter="handleSearch({ query })"
            :ui="{ placeholder: 'dark:placeholder-gray-400' }"
          />
        </UFormGroup>
        <UButton
          size="lg"
          icon="i-heroicons-magnifying-glass"
          @click="handleSearch({ query })"
          :loading="loading"
        />
      </template>

      <template #results>
        <div class="mt-2 text-xs text-gray-500" v-if="!loading">
          <p>
            {{ $t("utils.results_count", { count: totalItems }) }} ({{
              $t("utils.query_time", { time: queryTime.toFixed(2) })
            }})
          </p>
        </div>
      </template>
    </ResearchContainer>

    <UDivider class="my-2" />

    <ResourceContainer v-if="!loading">
      <UContainer class="flex flex-wrap justify-center gap-4 max-w-7xl w-full">
        <ResourceCard
          v-for="resource in resources"
          :key="resource.id"
          :resource="resource"
        />
      </UContainer>
      <UPagination
        v-model="page"
        :total="totalItems"
        :page-count="30"
        show-last
        show-first
      />
    </ResourceContainer>

    <ResourceContainer v-else>
      <UContainer class="flex flex-wrap justify-center gap-4 max-w-7xl w-full">
        <ResourceSkeleton v-for="i in 10" :key="i" />
      </UContainer>
    </ResourceContainer>
  </div>
</template>

<style scoped></style>

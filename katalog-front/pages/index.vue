<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import ResourceContainer from "~/components/resource/Container.vue";
import ResearchContainer from "~/components/research/Container.vue";
import type { Resource } from "#common/resource";

const resources = ref<Resource[]>([]);
const page = ref(1);
const perPage = 30;
const totalItems = ref(0);
const searchParams = ref({ query: "" });
const loading = ref(true);
const queryTime = ref(0);
const resultCount = ref(0);

interface ApiResponse {
  data: Resource[];
  paginationInfo: {
    total: number;
  };
}

const fetchResources = async () => {
  loading.value = true;
  const startTime = performance.now();

  try {
    const response = await $fetch<ApiResponse>("/api/get-resources", {
      params: {
        page: Number(page.value),
        perPage: Number(perPage),
        query: searchParams.value.query,
      },
    });
    resources.value = response.data;
    totalItems.value = response.paginationInfo.total;
    resultCount.value = response.data.length;
  } catch (error) {
    console.error("Error fetching resources:", error);
  } finally {
    const endTime = performance.now();
    queryTime.value = (endTime - startTime) / 1000;
    loading.value = false;
  }
};

const query = ref("");

const handleSearch = (params: { query: string }) => {
  searchParams.value = params;
  page.value = 1;
  fetchResources();
};

onMounted(fetchResources);

watch(page, fetchResources);
</script>

<template>
  <div class="pb-4">
    <ResearchContainer>
      <template #searchBar>
        <UFormGroup class="w-full">
          <UInput
              v-model="query"
              :placeholder="$t('utils.simpleSearch')"
              :ui="{ placeholder: 'dark:placeholder-gray-400' }"
              size="lg"
              @keyup.enter="handleSearch({ query })"
          />
        </UFormGroup>
        <UButton
            :loading="loading"
            icon="i-heroicons-magnifying-glass"
            size="lg"
            @click="handleSearch({ query })"
        />
      </template>

      <template #results>
        <div v-if="!loading" class="mt-2 text-xs text-gray-500">
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
          :page-count="30"
          :total="totalItems"
          show-first
          show-last
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
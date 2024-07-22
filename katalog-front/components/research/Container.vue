<script setup lang="ts">
import { _borderColor } from "#tailwind-config/theme";
import { ref } from "vue";
const props = defineProps<{
  onSearch: (params: { query: string }) => void;
  loading: boolean;
  totalItems: number;
  queryTime: number;
}>();

const query = ref("");

const search = () => {
  const searchParams = { query: query.value };
  props.onSearch(searchParams);
};
</script>

<template>
  <UContainer class="flex flex-col items-center">
    <UContainer
      class="flex h-fit w-full justify-center gap-3 rounded-4 md:flex-row max-w-lg"
    >
      <UFormGroup class="w-full">
        <UInput
          size="lg"
          v-model="query"
          :placeholder="$t('utils.simpleSearch')"
          @keyup.enter="search"
          :ui="{ placeholder: 'dark:placeholder-gray-400' }"
        />
      </UFormGroup>
      <UButton
        size="lg"
        icon="i-heroicons-magnifying-glass"
        @click="search"
        :loading="props.loading"
      />
    </UContainer>
    <div class="mt-2 text-xs text-gray-500" v-if="!loading">
      <p>
        {{ $t("utils.results_count", { count: props.totalItems }) }} ({{
          $t("utils.query_time", { time: props.queryTime.toFixed(2) })
        }})
      </p>
    </div>
  </UContainer>
</template>

<style scoped></style>

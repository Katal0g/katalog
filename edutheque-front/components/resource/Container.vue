<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Resource } from '~/models';

const props = defineProps<{
  resources: Resource[];
  page: number;
  totalItems: number;
  loading: boolean;
  onPageChange: () => void;
}>();

const page = ref(props.page);

watch(page, () => {
  props.onPageChange();
});
</script>

<template>
  <div class="flex flex-col items-center gap-6 mt-4">
    <UContainer class="flex flex-wrap justify-center gap-6 max-w-9xl w-full">
      <ResourceCard v-for="resource in props.resources" :key="resource.id" :resource="resource" />
    </UContainer>
    <UPagination
        v-if="!props.loading"
        v-model="page"
        :total="props.totalItems"
        :page-count="25"
        @change="props.onPageChange"
        show-last
        show-first
    />
  </div>
</template>

<style scoped></style>
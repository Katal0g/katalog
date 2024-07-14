<script setup lang="ts">
import { ref } from "vue";
import { LEVELS, SUBJECTS } from "~/models";

const levelListSelected = ref<string[]>([]);
const subjectListSelected = ref<string[]>([]);
</script>

<template>
  <UContainer
    class="mt-4 flex h-fit w-full flex-col justify-center gap-3 border p-4 rounded-4 md:flex-row lg:w-fit"
  >
    <UFormGroup :label="$t('scholar.title')">
      <UInput
        :placeholder="
          $t('utils.search', { field: $t('scholar.title').toLowerCase() })
        "
      />
    </UFormGroup>
    <ResearchVerticalDivider class="hidden md:flex" />
    <UFormGroup :label="$t('scholar.level')">
      <ResearchSelectMenu
        v-model="levelListSelected"
        :options="LEVELS.map((level) => level.label)"
        :searchable-placeholder="
          $t('utils.search', { field: $t('scholar.level').toLowerCase() })
        "
        :placeholder="
          $t('utils.search', { field: $t('scholar.level').toLowerCase() })
        "
      />
    </UFormGroup>
    <ResearchVerticalDivider class="hidden md:flex" />
    <UFormGroup :label="$t('scholar.subject')">
      <ResearchSelectMenu
        v-model="subjectListSelected"
        :options="SUBJECTS"
        :searchable-placeholder="
          $t('utils.search', { field: $t('scholar.subject').toLowerCase() })
        "
        :placeholder="
          $t('utils.search', { field: $t('scholar.subject').toLowerCase() })
        "
      />
    </UFormGroup>
    <ResearchVerticalDivider class="hidden md:flex" />
    <UFormGroup :label="$t('researchPage.author')">
      <UInput
        :placeholder="
          $t('utils.search', { field: $t('researchPage.author').toLowerCase() })
        "
      />
    </UFormGroup>
    <UButton
      :label="$t('researchPage.search')"
      icon="i-heroicons-magnifying-glass"
    />
  </UContainer>
</template>

<style scoped></style>

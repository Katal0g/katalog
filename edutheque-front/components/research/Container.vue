<script setup lang="ts">
import { levels, subjects } from "~/models";

const levelListSelected = ref<string[]>([]);
const subjectListSelected = ref<string[]>([]);
</script>

<template>
  <UContainer
    class="mt-4 flex h-fit w-full flex-col justify-center gap-3 border p-4 rounded-4 md:flex-row lg:w-fit"
  >
    <UFormGroup label="Titre">
      <UInput placeholder="Rechercher par titre" />
    </UFormGroup>
    <ResearchVerticalDivider class="hidden md:flex" />
    <UFormGroup label="Niveaux">
      <USelectMenu
        v-model="levelListSelected"
        :options="levels"
        multiple
        searchable
        searchable-placeholder="Quel(s) niveau(x) ?"
        placeholder="Rechercher par niveau(x)"
        class="w-48"
      >
        <template #label class="text-ellipsis truncate">
          <span v-if="levelListSelected.length" class="text-ellipsis truncate">{{ levelListSelected.join(', ') }}</span>
        </template>
      </USelectMenu>
    </UFormGroup>
    <ResearchVerticalDivider class="hidden md:flex" />
    <UFormGroup label="Matières">
      <USelectMenu
        v-model="subjectListSelected"
        :options="subjects"
        multiple
        searchable
        searchable-placeholder="Quelle(s) matière(s) ?"
        placeholder="Rechercher par matière(s)"
        class="w-48"
      >
        <template #label>
          <span v-if="subjectListSelected.length" class="text-ellipsis truncate">{{ subjectListSelected.join(', ') }}</span>
        </template>
      </USelectMenu>
    </UFormGroup>
    <ResearchVerticalDivider class="hidden md:flex" />
    <UFormGroup label="Auteur">
      <UInput placeholder="Quel auteur ?" />
    </UFormGroup>
    <UButton label="Rechercher" icon="i-heroicons-magnifying-glass" />
  </UContainer>
</template>

<style scoped></style>

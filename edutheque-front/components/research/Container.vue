<script setup lang="ts">
import { ref } from "vue";
import { levels, subjects } from "~/models";

const levelListSelected = ref<string[]>([]);
const subjectListSelected = ref<string[]>([]);

watch([levelListSelected, subjectListSelected], () => {
  console.log(levelListSelected.value, subjectListSelected.value);
});
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
      <ResearchSelectMenu v-model="levelListSelected" :options="levels" searchable-placeholder="Quel(s) niveau(x) ?" placeholder="Rechercher par niveau(x)" />
    </UFormGroup>
    <ResearchVerticalDivider class="hidden md:flex" />
    <UFormGroup label="Matières">
      <ResearchSelectMenu
          v-model="subjectListSelected"
          :options="subjects"
          searchable-placeholder="Quelle(s) matière(s) ?"
          placeholder="Rechercher par matière(s)"
      />
    </UFormGroup>
    <ResearchVerticalDivider class="hidden md:flex" />
    <UFormGroup label="Auteur">
      <UInput placeholder="Quel auteur ?" />
    </UFormGroup>
    <UButton label="Rechercher" icon="i-heroicons-magnifying-glass" />
  </UContainer>
</template>

<style scoped></style>
<script setup lang="ts">
import { levels, subjects } from "~/models";

const levelSelected = ref<string>("");
const subjectSelected = ref<string>("");
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
      <UInputMenu
        v-model="levelSelected"
        :options="levels"
        placeholder="Quel(s) niveau(x) ?"
      />
    </UFormGroup>
    <ResearchVerticalDivider class="hidden md:flex" />
    <UFormGroup label="Matières">
      <UInputMenu
        v-model="subjectSelected"
        :options="subjects"
        placeholder="Quelle(s) matière(s) ?"
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

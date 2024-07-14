<template>
  <UContainer class="flex-col p-4 flex gap-4 lg:flex-row">
    <UCard class="w-full h-fit lg:w-1/4">
      <template #header>
        <h1 class="text-2xl font-bold">🤖 Générateur</h1>
      </template>

      <UForm
        class="flex flex-col gap-2"
        :state="formState"
        @submit="generateContent"
      >
        <UFormGroup label="Niveau">
          <USelect
            v-model="formState.level"
            :options="levels"
            placeholder="Sélectionnez un niveau"
          />
        </UFormGroup>

        <UFormGroup label="Matière">
          <UInput v-model="formState.subject" placeholder="Entrez la matière" />
        </UFormGroup>

        <UFormGroup label="Titre">
          <UInput
            v-model="formState.title"
            placeholder="Entrez le titre du sujet"
          />
        </UFormGroup>

        <UFormGroup label="Nb questions">
          <UInput
            type="number"
            placeholder="5"
            v-model="formState.nbQuestions"
          />
        </UFormGroup>

        <UButton
          class="mt-2 py-2"
          block
          type="submit"
          color="primary"
          :loading="loading"
        >
          Générer le contenu
        </UButton>
      </UForm>
    </UCard>

    <UCard class="w-full">
      <template #header>
        <h2 class="text-xl font-semibold">📚 Contenu</h2>
      </template>
      <div class="italic text-gray" v-if="!formattedContent && !loading">
        Votre contenu sera affiché ici
      </div>
      <div class="text-center" v-if="loading">
        <span class="italic text-gray">
          Nos petits robots travaillent dur pour générer le contenu...
        </span>
        <UProgress size="md" animation="swing" />
      </div>
      <div v-else v-html="formattedContent"></div>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const formState = ref({
  level: "",
  subject: "",
  title: "",
  nbQuestions: 5,
});

const levels = [
  { label: "Primaire", value: "primaire" },
  { label: "Collège", value: "college" },
  { label: "Lycée", value: "lycee" },
  { label: "Supérieur", value: "superieur" },
];

const loading = ref(false);
const currentContent = ref("");

const formattedContent = computed(() => {
  return currentContent.value.replace(/\n/g, "<br>");
});

async function generateContent() {
  // Check if the form is valid
  if (
    !formState.value.level ||
    !formState.value.subject ||
    !formState.value.title
  ) {
    return;
  }

  loading.value = true;
  try {
    const response = await $fetch("/api/generate-content", {
      method: "POST",
      body: formState.value,
    });

    if (response.content === null) {
      return;
    }

    currentContent.value = response.content;
  } catch (error) {
    console.error("Error generating content:", error);
  } finally {
    loading.value = false;
  }
}
</script>

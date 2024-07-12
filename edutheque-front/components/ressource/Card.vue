<script setup lang="ts">
import type { Ressource } from "~/models";

defineProps({
  ressource: {
    type: Object as () => Ressource,
    required: true,
  },
});
</script>

<template>
  <div
      class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 shadow-none transition border-1 hover:border-slate-4 flex flex-col justify-between p-4 rounded-lg"
  >
    <div>
      <div class="flex">
        <img :src="ressource.image" alt="placeholder" class="h-24 w-24" />
        <div class="ml-4 flex flex-col justify-between overflow-hidden">
          <div class="text-lg font-bold">
            {{ ressource.title }}
          </div>
          <div v-if="ressource.link" class="w-fit">
            <a :href="ressource.link" class="truncate text-ellipsis">
              {{ ressource.link }}
            </a>
          </div>
          <div v-else>
            <span class="italic">😢 Pas de lien</span>
          </div>
        </div>
      </div>
      <div class="flex gap-2 flex-wrap pt-3" v-if="ressource.tags">
        <RessourceTag v-for="tag in ressource.tags" :key="tag" :label="tag" />
      </div>
      <div class="flex flex-col gap-1 overflow-auto pt-2 flex-grow">
        <div class="text-sm">
          {{ ressource.description }}
        </div>
      </div>
    </div>
    <div class="flex flex-wrap gap-2 pt-2">
      <UButton
          icon="i-heroicons-information-circle"
          variant="soft"
          color="gray"
          class="h-10 flex-grow justify-center"
          label="Plus d'infos"
      />
      <UButton
          icon="i-heroicons-arrow-down-tray-20-solid"
          class="h-10 flex-grow justify-center"
          label="Importer"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
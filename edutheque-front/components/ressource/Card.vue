<script setup lang="ts">
import type { Ressource } from "~/models";

const props = defineProps({
  ressource: {
    type: Object as () => Ressource,
    required: true,
  },
});

const formattedDate = computed(() => {
  return props.ressource.lastUpdated
    ? new Date(props.ressource.lastUpdated).toLocaleDateString("fr-FR", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
      })
    : "N/A";
});
</script>

<template>
  <div
    class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 shadow-none transition border-1 hover:border-slate-4 flex flex-col justify-between p-4 rounded-lg"
  >
    <!-- MAIN -->
    <div class="cursor-default">
      <div class="flex">
        <div class="flex justify-between w-full">
          <!-- TITLE + TAGS -->
          <div class="flex flex-col w-fit">
            <span class="text-xl font-bold">
              {{ ressource.title }}
            </span>
            <div class="flex gap-2 flex-wrap mt-1 w-fit" v-if="ressource.tags">
              <RessourceTag
                v-for="tag in ressource.tags"
                :key="tag"
                :label="tag"
              />
            </div>
          </div>

          <!-- AUTHOR + DATE -->
          <div
            class="flex flex-col text-end text-gray-4 truncate text-ellipsis"
          >
            <UTooltip
              :text="$t('researchPage.author') + ' : ' + ressource.author"
            >
              <div
                class="flex items-center justify-end truncate text-ellipsis cursor-default"
              >
                <UIcon name="i-heroicons-user" class="mr-1" />
                <span class="truncate text-ellipsis">
                  {{ ressource.author }}
                </span>
              </div>
            </UTooltip>
            <div class="flex items-center justify-end">
              <UTooltip
                :text="$t('researchPage.lastUpdated') + ' : ' + formattedDate"
              >
                <div
                  class="flex items-center justify-end truncate text-ellipsis cursor-default"
                >
                  <UIcon name="i-heroicons-clock-16-solid" class="mr-1"></UIcon>
                  <span class="truncate text-ellipsis">
                    {{ formattedDate }}</span
                  >
                </div>
              </UTooltip>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-1 overflow-auto pt-2 flex-grow max-h-30">
        <div class="text-sm">
          {{ ressource.description }}
        </div>
      </div>
    </div>

    <!-- BUTTONS -->
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
        label="Utiliser"
        variant="soft"
      />
    </div>
  </div>
</template>

<style scoped></style>

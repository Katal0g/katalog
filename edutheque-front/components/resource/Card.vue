<script setup lang="ts">
import type { Resource } from "~/models";

const props = defineProps({
  resource: {
    type: Object as () => Resource,
    required: true,
  },
});

const formattedDate = computed(() => {
  return props.resource.lastUpdated
    ? new Date(props.resource.lastUpdated).toLocaleDateString("fr-FR", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
      })
    : "N/A";
});

const detailedDateTime = computed(() => {
  return props.resource.lastUpdated
    ? new Date(props.resource.lastUpdated).toLocaleString("fr-FR", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
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
          <div class="flex flex-col w-fit text-wrap max-w-48  truncate text-ellipsis">
            <span class="text-xl font-bold">
              {{ resource.title }}
            </span>
            <div class="flex gap-2 flex-wrap mt-1 w-fit" v-if="resource.tags">
              <ResourceTag
                v-for="tag in resource.tags"
                :key="tag"
                :label="tag"
              />
            </div>
          </div>

          <!-- AUTHOR + DATE -->
          <div
            class="flex flex-col text-end text-gray-4 truncate text-ellipsis pl-2"
          >
            <UTooltip
              :text="$t('researchPage.author') + ' : ' + resource.author"
            >
              <div
                class="flex items-center justify-end truncate text-ellipsis cursor-default"
              >
                <UIcon name="i-heroicons-user" class="mr-1" />
                <span class="truncate text-ellipsis">
                  {{ resource.author }}
                </span>
              </div>
            </UTooltip>
            <div class="flex items-center justify-end">
              <UTooltip
                :text="$t('researchPage.lastUpdated') + ' : ' + detailedDateTime"
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
          {{ resource.description }}
        </div>
      </div>
    </div>

    <!-- BUTTONS -->
    <div class="flex flex-wrap gap-2 pt-2">
      <UButton
        icon="i-heroicons-arrow-up-right-20-solid"
        class="h-10 flex-grow justify-center"
        :label="$t('researchPage.goToResource')"
        variant="soft"
        target="_blank"
        trailing
        :disabled="!resource.link"
        :to="resource.link"
      />
    </div>
  </div>
</template>

<style scoped></style>

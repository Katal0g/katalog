<script setup lang="ts">
import type { Tag } from "~/models";
import type { PropType } from "vue";
defineProps({
  label: {
    type: String as PropType<Tag>,
  },
});
</script>

<template>
  <div>
    <div
      class="flex h-fit w-fit justify-center rounded-2xl bg-slate-900 px-2 text-center text-sm text-white py-0.5"
      v-if="label"
    >
      {{ label }}
    </div>
  </div>
</template>

<style scoped></style>

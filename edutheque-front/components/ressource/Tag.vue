<script setup lang="ts">
defineProps({
  label: {
    type: String,
  },
});
</script>

<template>
  <div
    class="flex h-fit w-fit justify-center rounded-2xl bg-slate-900 px-2 text-center text-sm text-white py-0.5"
  >
    {{ label }}
  </div>
</template>

<style scoped></style>

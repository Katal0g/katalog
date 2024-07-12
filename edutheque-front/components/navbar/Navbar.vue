<script setup lang="ts">
</script>

<template>
  <nav class="hidden mx-4 mt-4 pb-2 mb-4 md:flex justify-between border-b">
    <div>edutheque</div>
    <div class="flex gap-4">
      <ULink class="hover:font-bold transition-all" to="/">Ressources</ULink>
      <ULink class="hover:font-bold transition-all" to="generator">Generator</ULink>
    </div>
    <div>Aide / Contact</div>
  </nav>
  <nav class="flex flex-col items-center md:hidden">
    <div>edutheque</div>
    <div class="flex gap-2">
      <ULink to="/">Ressources</ULink>
      <ULink to="generator">Generator</ULink>
    </div>
    <div>Aide / Contact</div>
  </nav>
</template>

<style scoped></style>

<script setup lang="ts">
import { ref } from "vue";
import NavLink from "~/components/navbar/NavLink.vue";
import MobileMenu from "~/components/navbar/MobileMenu.vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <nav class="hidden mx-4 mt-4 pb-2 mb-4 md:flex justify-between border-b">
    <div>edutheque</div>
    <div class="flex gap-4">
      <NavLink to="/" text="Ressources" />
      <NavLink to="generator" text="Generator" />
    </div>
    <div class="flex gap-2">
      <NavLink to="help" text="Aide" icon="i-heroicons-question-mark-circle" />
    </div>
  </nav>

  <!-- Mobile Nav -->
  <nav class="flex mt-4 justify-between md:hidden">
    <div>edutheque</div>
    <UButton @click="toggleMenu" icon="i-mdi-menu" variant="soft" />
  </nav>

  <!-- Full-Screen Mobile Menu -->
  <MobileMenu v-if="isMenuOpen" @closeMenu="closeMenu" />
</template>

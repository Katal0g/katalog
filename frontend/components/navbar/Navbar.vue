<script setup lang="ts">
import { ref } from "vue";
import NavLink from "~/components/navbar/NavLink.vue";
import MobileMenu from "~/components/navbar/MobileMenu.vue";
import ColorModeButton from "~/components/style/ColorModeButton.vue";
const { setLocale } = useI18n();

type LanguageType = { label: string; value: string };
const languages = [
  { label: "Français", value: "fr" },
  { label: "English", value: "en" },
] as LanguageType[];

const isMenuOpen = ref(false);
const languageSelected = ref({ label: "Français", value: "fr" });
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

watch(languageSelected, (newValue: LanguageType) => {
  setLocale(newValue.value);
});
</script>

<template>
  <nav class="hidden mb-4 py-2 md:block border-b">
    <UContainer class="flex w-full justify-between items-center">
      <div class="w-1/5 pointer-events-none">elaasticatalog</div>
      <div class="flex gap-4">
        <NavLink to="/" :text="$t('resources')" />
      </div>
      <div class="flex gap-2 w-1/5 justify-end items-center">
        <ColorModeButton />
        <USelectMenu v-model="languageSelected" :options="languages" />
        <NavLink
          to="help"
          :text="$t('help')"
          icon="i-heroicons-question-mark-circle"
        />
      </div>
    </UContainer>
  </nav>

  <!-- Mobile Nav -->
  <nav
    class="flex mb-4 py-2 px-4 justify-between items-center border-b md:hidden"
  >
    <div class="pointer-events-none">elaasticatalog</div>
    <div class="flex gap-2 items-center">
      <ColorModeButton />
      <USelectMenu v-model="languageSelected" :options="languages" />
      <UButton @click="toggleMenu" icon="i-mdi-menu" variant="soft" />
    </div>
  </nav>

  <!-- Full-Screen Mobile Menu -->
  <MobileMenu v-if="isMenuOpen" @closeMenu="closeMenu" />
</template>

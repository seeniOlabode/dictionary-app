<template>
  <header class="flex justify-between">
    <img src="@/assets/iconoir_book.svg" alt="" />
    <div class="flex items-center">
      <slot name="fontSelect"></slot>
      <darkmode-toggle />
    </div>
  </header>
</template>

<script>
import DarkmodeToggle from "../shared/DarkmodeToggle.vue";

export default {
  name: "WebsiteHeader",
  components: {
    DarkmodeToggle,
  },
};
</script>

<style>
</style>
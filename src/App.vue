<template>
  <div :class="font.class" class="p-6">
    <page-loader />
    <website-header>
      <template #fontSelect>
        <font-select @fontSelect="(selectedFont) => (font = selectedFont)" />
      </template>
    </website-header>
    <main-app-component class="mt-6" />
  </div>
</template>

<script>
import WebsiteHeader from "./components/navigation/WebsiteHeader.vue";
import FontSelect from "./components/shared/FontSelect.vue";
import MainAppComponent from "./components/app/MainAppComponent.vue";
import PageLoader from "./components/shared/PageLoader.vue";

export default {
  name: "App",
  components: {
    WebsiteHeader,
    FontSelect,
    MainAppComponent,
    PageLoader,
  },
  data() {
    return {
      font: {
        name: "Sans Serif",
        class: "sans",
      },
    };
  },
  provide() {
    return {
      getFont: () => this.font,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

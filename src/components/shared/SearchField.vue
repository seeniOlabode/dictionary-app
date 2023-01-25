<template>
  <div @keypress.enter="loading = !loading">
    <div
      class="
        flex
        justify-between
        rounded-2xl
        border border-solid border-transparent
        focus-within:border-dict-purple
        items-center
        relative
        transition-colors
        pr-6
        search-container
      "
      :class="{ 'border-dict-red': error.state }"
      :style="inputStyles"
    >
      <input
        type="search"
        ref="search"
        placeholder="Search for any word"
        class="
          search-element
          text-dict-black-300
          font-bold
          text-base
          selement
          pl-6
          grow
          w-full
        "
      />
      <img v-if="!loading" src="@/assets/iconoir_search.svg" alt="" />
      <search-loader v-else />
    </div>
    <h3 v-show="error.state" class="absolute mt-2 sans-heading-s text-dict-red">
      {{ error.message }}
    </h3>
  </div>
</template>

<script>
import SearchLoader from "./SearchLoader.vue";

export default {
  name: "SearchField",
  components: {
    SearchLoader,
  },
  data() {
    return {
      error: {
        state: false,
        message: "Whoops, can't be empty...",
      },
      loading: false,
    };
  },
  computed: {
    inputStyles() {
      return {
        gap: "5px",
        background: "#F4F4F4",
      };
    },
  },
  mounted() {
    this.$refs.search.focus();
  },
};
</script>

<style scoped>
.search-element {
  background: none;
}

.search-element:focus-within {
  outline: none;
}

.search-element::placeholder {
  @apply font-bold text-base sm:text-xl;
}

.search-element {
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
}

@media (min-width: 640px) {
  .search-element {
    padding-top: 1.25rem /* 20px */;
    padding-bottom: 1.25rem /* 20px */;
  }
}
</style>

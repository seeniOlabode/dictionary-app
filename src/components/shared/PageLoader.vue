<template>
  <div class="absolute top-0 w-full left-0 right-0 h-2 outer flex">
    <div class="inner"></div>
  </div>
</template>

<script>
export default {
  name: "PageLoader",
  data() {
    return {};
  },
};
</script>

<style scoped>
.inner {
  @apply bg-dict-purple h-full bg-opacity-75;
  animation: load 1s ease-in;
}

@keyframes load {
  0% {
    flex-basis: 0;
    display: block;
  }
  100% {
    flex-basis: 100%;
  }
}
</style>
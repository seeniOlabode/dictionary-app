<template>
  <button
    class="
      rounded-full
      bg-dict-purple bg-opacity-25
      w-20
      aspect-square
      flex
      justify-center
      items-center
      hover:bg-opacity-100
    "
    @click="playing = !playing"
  >
    <img
      v-if="!playing"
      src="@/assets/play-icon.svg"
      class=""
      alt=""
      style=""
    />
    <music-loader v-else />
  </button>
</template>

<script>
import MusicLoader from "./MusicLoader.vue";
export default {
  name: "PlayButton",
  components: {
    MusicLoader,
  },
  data() {
    return {
      playing: true,
    };
  },
};
</script>

<style scoped>
button:hover img {
  filter: brightness(0) invert(1);
}

:global(button:hover .bars div) {
  @apply bg-white;
}

button {
  transform: scale(0.6);
}

@media (min-width: 640px) {
  button {
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}
</style>
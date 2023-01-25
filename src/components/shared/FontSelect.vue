<template>
  <div class="relative mr-4">
    <button
      class="flex items-center border-r border-solid px-4"
      :class="font.class"
      style="border-color: #e9e9e9"
      @click="showOptions = !showOptions"
    >
      {{ font.name }}
      <img
        class="ml-4 transition-transform"
        :class="{ 'rotate-180': showOptions }"
        src="@/assets/caret-down.svg"
        alt=""
      />
    </button>
    <transition>
      <ul
        class="absolute bg-white rounded-2xl p-6 right-0 mt-5 z-10"
        v-show="showOptions"
        style="width: 183px"
      >
        <li class="font-option" :class="font.class">
          {{ font.name }}
        </li>
        <li
          v-for="option in otherOptions"
          :key="option.name + option.class"
          :class="option.class"
          class="font-option hover:text-dict-purple cursor-pointer"
          @click="$emit('fontSelect', option)"
        >
          {{ option.name }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: "FontSelect",
  inject: ["getFont"],
  data() {
    return {
      showOptions: false,
      options: [
        {
          name: "Sans Serif",
          class: "sans",
        },
        {
          name: "Serif",
          class: "serif",
        },
        {
          name: "Mono",
          class: "mono",
        },
      ],
    };
  },
  computed: {
    font() {
      return this.getFont();
    },
    otherOptions() {
      return this.options.filter((option) => option.name != this.font.name);
    },
  },
};
</script>

<style scoped>
.font-option:not(:first-child) {
  margin-top: 16px;
}

ul {
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
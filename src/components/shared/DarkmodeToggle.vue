<template>
  <div class="flex gap-4 items-center">
    <label class="switch">
      <input v-model="check" type="checkbox" />
      <span class="slider round"></span>
    </label>
    <img :style="imageStyles" src="@/assets/half-moon-icon.svg" alt="" />
  </div>
</template>
<script>
export default {
  name: "DarkmodeToggle",
  data() {
    return {
      check: true,
    };
  },
  computed: {
    imageStyles() {
      if (!this.check) {
        return {
          filter: "grayscale(100%)",
        };
      } else {
        return {};
      }
    },
  },
};
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #757575;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.switch:active .slider:before {
  background-color: #ffffff;
}

.slider:before:active {
  background-color: #a445ed;
}

input:checked + .slider {
  background-color: #a445ed;
}

input:checked + .slider:before {
  background-color: #ffffff;
}

input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 12px;
}

.slider.round:before {
  border-radius: 50%;
}

img[src*="sun"] {
  width: 20px;
  height: 18.6px;
}

img[src*="moon"] {
  width: 18px;
  height: 18px;
}
</style>
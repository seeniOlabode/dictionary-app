<template>
  <div class="bars flex justify-between">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "MusicLoader",
};
</script>

<style>
.bars {
  width: 20px;
  height: 10px;
}

.bars div {
  width: 4.5px;
  @apply bg-dict-purple;
  animation: barsLoading 0.3s infinite ease alternate-reverse;
  border-radius: 12px;
}

.bars div:nth-child(1) {
  animation-delay: 100ms;
}

.bars div:nth-child(2) {
  animation-delay: 300ms;
}

.bars div:nth-child(3) {
  animation-delay: 500ms;
}

@keyframes barsLoading {
  0% {
    transform: scale(1, 0.4);
  }
  50% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1.2);
  }
}
</style>
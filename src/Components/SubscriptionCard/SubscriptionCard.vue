<template>
  <div
    class="flex flex-col items-center text-center space-y-4"
    v-motion
    :initial="{ y: 100, opacity: 0 }"
    :visibleOnce="{ y: 0, opacity: 1, transition: { duration: 500, delay: delay } }"
  >
    <div class="bg-primary text-white text-3xl rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
      {{ icon }}
    </div>
    <h3 class="text-xl font-semibold text-green-800">{{ title }}</h3>
    <p class="text-sm text-gray-600 leading-relaxed">{{ desc }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  desc: String,
  delay: {
    type: Number,
    default: 0,
  },
})
</script>

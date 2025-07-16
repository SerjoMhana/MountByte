<template>
  <div
    class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center h-full"
    v-motion
    :initial="{ y: 100, opacity: 0 }"
    :visibleOnce="{ y: 0, opacity: 1, transition: { duration: 500, delay: delay } }"
  >
    <div class="w-full h-48 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden mb-4 border border-gray-200">
      <svg v-if="!imageUrl" class="w-3/4 h-3/4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 2h16c1.104 0 2 .896 2 2v16c0 1.104-.896 2-2 2H4c-1.104 0-2-.896-2-2V4c0-1.104.896-2 2-2zm0 2v16h16V4H4zm2 2h12v12H6V6zm2 2v8h8V8H8z"/>
      </svg>
      <img v-else :src="imageUrl" :alt="title" class="w-full h-full object-contain" />
    </div>
    
    <h3 class="text-xl font-semibold text-gray-800 mt-2">
      {{ title }}
    </h3>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    // default: 'path/to/default-placeholder.png', // يمكنك تعيين صورة افتراضية هنا
    required: false, // اجعله false إذا كنت تريد السماح بعدم تمرير صورة (واستخدام SVG مثلاً)
  },
  delay: {
    type: Number,
    default: 0,
  },
});
</script>

<style scoped>
/* No additional styles needed if you're purely using Tailwind. */
</style>

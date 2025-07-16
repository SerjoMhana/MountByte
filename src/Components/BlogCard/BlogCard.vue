<template>
  <router-link
    :to="`/blog/${slug}`"
    class="group block rounded-xl overflow-hidden shadow-lg relative bg-gray-100 dark:bg-gray-700"
    v-motion
    :initial="{ x: direction === 'right' ? 100 : -100, opacity: 0 }"
    :visibleOnce="{ x: 0, opacity: 1, transition: { duration: 500 } }"
  >
    <img :src="image" :alt="title" class="w-full h-48 object-cover" />
    <div class="p-5 flex flex-col justify-between h-full">
      <!-- Content -->
      <div>
        <h2 class="text-lg md:text-xl font-bold mb-1 leading-tight group-hover:underline text-gray-800 dark:text-white">
          {{ title }}
        </h2>
      </div>

      <!-- Date -->
      <div class="text-right">
        <p class="text-xs text-gray-500 dark:text-gray-400">{{ date }}</p>
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  title: String,
  date: String,
  slug: String,
  image: String, // Add image prop
  direction: {
    type: String,
    default: 'left',
  },
})
</script>

<template>
  <section class="px-6 py-12 bg-white">
    <h2 class="text-4xl font-bold text-center text-gray-800 mb-8 pt-12 animate-slow-bounce">{{ $t('blog.title') }}</h2>
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
      <BlogCard
        image="https://images.unsplash.com/photo-1518770660439-4636190af475"
        :title="$t('blog.card1.title')"
        :description="$t('blog.card1.description')"
        :author="$t('blog.card1.author')"
        :date="$t('blog.card1.date')"
        slug="web-development-trends-2024"
        direction="right"
      />

      <BlogCard
        image="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
        :title="$t('blog.card2.title')"
        :description="$t('blog.card2.description')"
        :author="$t('blog.card2.author')"
        :date="$t('blog.card2.date')"
        slug="beginners-guide-to-ai"
        direction="left"
      />
    </div>
  </section>
</template>

<script setup>
import BlogCard from '../BlogCard/BlogCard.vue'
</script>

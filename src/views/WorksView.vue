<script setup>
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { Motion } from '@motionone/vue';
import { useIntersectionObserver } from '@vueuse/core';

const { t } = useI18n();

const projectsSection = ref(null);
const projectsSectionIsVisible = ref(false);

onMounted(() => {
  useIntersectionObserver(
    projectsSection,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        projectsSectionIsVisible.value = true;
      }
    },
    { threshold: 0.3 }
  );
});

const activeFilter = ref('all'); // 'all', 'websites', 'designs'

const projects = ref([
  {
    id: 1,
    name: 'E-commerce Website Redesign',
    description: 'A modern and responsive e-commerce platform with enhanced user experience.',
    category: 'websites',
    image: 'https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Mobile App UI/UX Design',
    description: 'Intuitive and visually appealing design for a new mobile application.',
    category: 'designs',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'Corporate Landing Page',
    description: 'High-converting landing page for a corporate client, focusing on lead generation.',
    category: 'websites',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    name: 'Brand Identity Design',
    description: 'Complete brand identity package including logo, typography, and color palette.',
    category: 'designs',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: 'Portfolio Website',
    description: 'Personal portfolio website for a creative professional, showcasing their best work.',
    category: 'websites',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    name: 'Dashboard UI Design',
    description: 'Clean and functional dashboard interface for a data analytics platform.',
    category: 'designs',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]);

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects.value;
  }
  return projects.value.filter(project => project.category === activeFilter.value);
});

function setFilter(filter) {
  activeFilter.value = filter;
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-primary to-green-600 py-20 md:py-32 text-white overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="absolute inset-0 bg-pattern-dots opacity-10"></div>
      </div>
      <div class="container mx-auto px-6 relative z-10 text-center">
        <Motion
          :initial="{ opacity: 0, y: -50 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.2, duration: 0.8 }"
        >
          <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            {{ t('works.hero.title') }}
          </h1>
        </Motion>
        <Motion
          :initial="{ opacity: 0, y: 50 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.4, duration: 0.8 }"
        >
          <p class="text-lg md:text-xl max-w-3xl mx-auto">
            {{ t('works.hero.subtitle') }}
          </p>
        </Motion>
      </div>
    </section>

    <!-- Filter and Projects Section -->
    <section ref="projectsSection" class="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-6">
        <!-- Filter Buttons -->
        <Motion
          :initial="{ opacity: 0, y: -20 }"
          :animate="projectsSectionIsVisible ? { opacity: 1, y: 0 } : {}"
          :transition="{ delay: 0.2, duration: 0.6 }"
        >
          <div class="flex justify-center space-x-4 mb-12">
            <button
              @click="setFilter('all')"
              :class="{'bg-primary text-white': activeFilter === 'all', 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600': activeFilter !== 'all'}"
              class="px-6 py-3 rounded-full font-semibold transition-colors duration-300 shadow-md"
            >
              {{ t('works.filters.all') }}
            </button>
            <button
              @click="setFilter('websites')"
              :class="{'bg-primary text-white': activeFilter === 'websites', 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600': activeFilter !== 'websites'}"
              class="px-6 py-3 rounded-full font-semibold transition-colors duration-300 shadow-md"
            >
              {{ t('works.filters.websites') }}
            </button>
            <button
              @click="setFilter('designs')"
              :class="{'bg-primary text-white': activeFilter === 'designs', 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600': activeFilter !== 'designs'}"
              class="px-6 py-3 rounded-full font-semibold transition-colors duration-300 shadow-md"
            >
              {{ t('works.filters.designs') }}
            </button>
          </div>
        </Motion>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Motion
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            :initial="{ opacity: 0, y: 50 }"
            :animate="projectsSectionIsVisible ? { opacity: 1, y: 0 } : {}"
            :transition="{ delay: 0.1 * index + 0.4, duration: 0.6 }"
          >
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img :src="project.image" :alt="project.name" class="w-full h-56 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{{ project.name }}</h3>
                <p class="text-gray-600 dark:text-gray-300">{{ project.description }}</p>
              </div>
            </div>
          </Motion>
        </div>
        <Motion
          v-if="filteredProjects.length === 0"
          :initial="{ opacity: 0 }"
          :animate="projectsSectionIsVisible ? { opacity: 1 } : {}"
          :transition="{ delay: 0.5, duration: 0.5 }"
        >
          <p class="text-center text-gray-600 dark:text-gray-300 text-lg mt-12">
            {{ t('works.no_projects') }}
          </p>
        </Motion>
      </div>
    </section>
  </div>
</template>

<style scoped>
.bg-pattern-dots {
  background-image: radial-gradient(#ffffff 1px, transparent 1px);
  background-size: 20px 20px;
}
</style>

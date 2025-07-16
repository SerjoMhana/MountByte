<template>
  <section class="bg-[#f6fcf9] py-24 px-4">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
      <div
        class="order-1 md:order-1"
        v-motion
        :initial="{ x: locale === 'ar' ? 100 : -100, opacity: 0 }"
        :enter="{ x: 0, opacity: 1, transition: { duration: 500 } }"
      >
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6" style="line-height: 1.5;">
          {{ $t('hero.title1') }}<br />
          <span class="text-primary mt-6">{{ $t('hero.title2') }}</span>
          <br />
        </h1>
        <ul class="space-y-3 text-lg text-gray-600 font-medium mb-8">
          <li class="flex items-center justify-start gap-2">
            <span>✔️</span>
            <span>{{ $t('hero.feature1') }}</span>
          </li>
          <li class="flex items-center justify-start gap-2">
            <span>✔️</span>
            <span>{{ $t('hero.feature2') }}</span>
          </li>
          <li class="flex items-center justify-start gap-2">
            <span>✔️</span>
            <span>{{ $t('hero.feature3') }}</span>
          </li>
        </ul>
        <button class="bg-primary hover:bg-primary_hover text-white px-6 py-3 rounded-full font-semibold text-lg transition">
         {{ $t('hero.button') }}
        </button>
      </div>

      <!-- الصورة على اليمين -->
      <div
        class="order-2 md:order-2"
        v-motion
        :initial="{ x: locale === 'ar' ? -100 : 100, opacity: 0 }"
        :enter="{ x: 0, opacity: 1, transition: { duration: 500 } }"
      >
        <img
          src="../../assets/img2.webp"
          alt="واجهة تصميم موقع"
          class="rounded-xl"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
</script>

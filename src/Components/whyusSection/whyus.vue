<template>
  <section class="bg-Second text-black py-12 pb-6">
    <div class="max-w-7xl mx-auto px-2">
      <h2 class="text-3xl font-bold text-center mb-12 animate-slow-bounce">
        {{ $t('whyus.title') }}
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <WhyUsCard :title="$t('whyus.card1.title')" image-url="/src/assets/images/design1.png" :delay="0" />
        <WhyUsCard :title="$t('whyus.card2.title')" image-url="/src/assets/images/design2.png" :delay="200" />
        <WhyUsCard :title="$t('whyus.card3.title')" image-url="/src/assets/images/design3.png" :delay="400" />
      </div>
    </div>
  </section>
</template>

<script setup>
import WhyUsCard from '../WhyUsCard/WhyUsCard.vue'; // تأكد من المسار الصحيح لمكون البطاقة الفرعي WhyUsCard.vue
</script>

<style scoped>
/* يمكنك إضافة أنماط خاصة بهذا القسم هنا إذا لم يتم تغطيتها بواسطة Tailwind */
/* مثال بسيط للأنيميشن (يتطلب تهيئة في tailwind.config.cjs) */

</style>

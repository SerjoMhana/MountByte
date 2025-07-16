<template>
        <div class=" bg-white p-6 pb-24">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-8 pt-12 pb-6 animate-slow-bounce">{{ $t('services.title') }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <SubscriptionCard
                icon="💻"
                :title="$t('services.card1.title')"
                :desc="$t('services.card1.desc')"
                :delay="0"
            />
            <SubscriptionCard
                icon="💡"
                :title="$t('services.card2.title')"
                :desc="$t('services.card2.desc')"
                :delay="200"
            />
            <SubscriptionCard
                icon="🛠️"
                :title="$t('services.card3.title')"
                :desc="$t('services.card3.desc')"
                :delay="400"
            />
            <SubscriptionCard
                icon="🚀"
                :title="$t('services.card4.title')"
                :desc="$t('services.card4.desc')"
                :delay="600"
            />
        </div>
    </div>
</template>

<script setup >

import SubscriptionCard from '../SubscriptionCard/SubscriptionCard.vue'

</script>

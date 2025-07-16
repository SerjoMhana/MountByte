<script setup>
import { useI18n } from 'vue-i18n';
import { watch, onMounted } from 'vue';

const { locale } = useI18n();

function switchLanguage() {
  locale.value = locale.value === 'ar' ? 'en' : 'ar';
}

watch(locale, (newLocale) => {
  document.documentElement.lang = newLocale;
  document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
});

onMounted(() => {
  document.documentElement.lang = locale.value;
  document.documentElement.dir = locale.value === 'ar' ? 'rtl' : 'ltr';
});
</script>

<template>
  <div class="font-cairo overflow-x-hidden">
    <nav class="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </router-link>
        <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          <button @click="switchLanguage" type="button" class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <i class="fa-solid fa-globe w-5 h-5 rounded-full me-3"></i>
            {{ locale === 'ar' ? 'العربية' : 'English' }}
          </button>
          <button data-collapse-toggle="navbar-language" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-language" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <router-link to="/" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" active-class="md:text-primary md:dark:text-primary">{{ $t('nav.home') }}</router-link>
            </li>
            <li>
              <router-link to="/about" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary dark:text-white md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" active-class="md:text-primary md:dark:text-primary">{{ $t('nav.about') }}</router-link>
            </li>
            <li>
              <router-link to="/works" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary dark:text-white md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" active-class="md:text-primary md:dark:text-primary">{{ $t('nav.works') }}</router-link>
            </li>
            <li>
              <router-link to="/articles" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary dark:text-white md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" active-class="md:text-primary md:dark:text-primary">{{ $t('nav.articles') }}</router-link>
            </li>
            <li>
              <router-link to="/contact" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary dark:text-white md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" active-class="md:text-primary md:dark:text-primary">{{ $t('nav.contact') }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main>
      <router-view />
    </main>
    <footer class="bg-Second text-gray-800 px-12 py-12">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 justify-items-center">
        <!-- Column 1 -->
        <div class="text-center md:text-left">
          <h3 class="font-semibold mb-4 text-lg">{{ $t('footer.solutions.title') }}</h3>
          <ul class="space-y-2 text-gray-600">
            <li><a href="#" class="hover:text-primary transition-colors duration-300">{{ $t('footer.solutions.marketing') }}</a></li>
            <li><a href="#" class="hover:text-primary transition-colors duration-300">{{ $t('footer.solutions.analytics') }}</a></li>
            <li><a href="#" class="hover:text-primary transition-colors duration-300">{{ $t('footer.solutions.automation') }}</a></li>
            <li><a href="#" class="hover:text-primary transition-colors duration-300">{{ $t('footer.solutions.commerce') }}</a></li>
            <li><a href="#" class="hover:text-primary transition-colors duration-300">{{ $t('footer.solutions.insights') }}</a></li>
          </ul>
        </div>

        <!-- Column 2 -->
        <div class="text-center md:text-left">
          <h3 class="font-semibold mb-4 text-lg">{{ $t('footer.support.title') }}</h3>
          <ul class="space-y-2 text-gray-600">
            <li><a href="#" class="hover:text-primary transition-colors duration-300">{{ $t('footer.support.submit_ticket') }}</a></li>
            <li><a href="#" class="hover:text-primary transition-colors duration-300">{{ $t('footer.support.documentation') }}</a></li>
            <li><a href="#" class="hover:text-primary transition-colors duration-300">{{ $t('footer.support.guides') }}</a></li>
          </ul>
        </div>

        <!-- Column 3 -->
        <div class="text-center md:text-left">
          <h3 class="font-semibold mb-4 text-lg">{{ $t('footer.company.title') }}</h3>
          <ul class="space-y-2 text-gray-600">
            <li><a href="#" class="hover:text-primary transition-colors duration-300">{{ $t('footer.company.about_us') }}</a></li>
            <li><a href="#" class="hover:text-primary transition-colors duration-300">{{ $t('footer.company.blog') }}</a></li>
            <li><a href="#" class="hover:text-primary transition-colors duration-300">{{ $t('footer.company.jobs') }}</a></li>
            <li><a href="#" class="hover:text-primary transition-colors duration-300">{{ $t('footer.company.press') }}</a></li>
          </ul>
        </div>

        <!-- Column 4: Newsletter -->
        <div class="md:col-span-2 text-center md:text-left">
          <h3 class="font-semibold mb-4 text-lg">{{ $t('footer.newsletter.title') }}</h3>
          <p class="text-gray-600 text-sm mb-4">{{ $t('footer.newsletter.description') }}</p>
          <div class="flex items-center gap-2 w-full">
            <input type="email" :placeholder="$t('footer.newsletter.placeholder')" class="px-4 py-2 rounded-md bg-white border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary flex-grow shadow-sm" />
            <button class="bg-primary hover:bg-primary_hover text-white px-4 py-2 rounded-md text-sm transition-colors duration-300 shadow-md">{{ $t('footer.newsletter.subscribe_button') }}</button>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-200 mt-12 pt-6">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-500 text-sm">{{ $t('footer.copyright') }}</p>
          <div class="flex gap-4 text-gray-500">
            <a href="#" class="hover:text-primary transition-colors duration-300"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="hover:text-primary transition-colors duration-300"><i class="fab fa-instagram"></i></a>
            <a href="#" class="hover:text-primary transition-colors duration-300"><i class="fab fa-twitter"></i></a>
            <a href="#" class="hover:text-primary transition-colors duration-300"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

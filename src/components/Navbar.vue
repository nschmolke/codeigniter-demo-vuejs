<template>
  <Disclosure as="nav" class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <img class="lg:block h-8 w-auto" :src="require('../assets/ba-logo-monochrome.svg')" alt="Workflow" />
          </div>
          <div class="sm:ml-6">
            <div class="flex space-x-4">
              <router-link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" exact-active-class="bg-gray-900 text-white">Home</router-link>
              <router-link to="/posts" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" exact-active-class="bg-gray-900 text-white">Posts</router-link>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <span class="text-white">Vue.js Projekt</span>
        </div>
      </div>
    </div>
  </Disclosure>

  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900">
        {{ $route.name }}
      </h1>
    </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="px-4 py-6 sm:px-0">
        <router-view/>
      </div>
      <!-- /End replace -->
    </div>
  </main>
</template>

<script>
import { Disclosure } from '@headlessui/vue'

export default {
  name: "Navbar",
  components: {
    Disclosure,
  }
}
</script>

<style scoped>

</style>

<script setup>
  const showMenu = ref(false)
  const toggleStatus = () => {
    showMenu.value = !showMenu.value
  }
  const jobs = ref([])
  jobs.value = [
    { id: 1, path: '/', title: 'TOP'},
    { id: 2, path: '/about', title: 'About'},
    { id: 3, path: '/users/list', title: 'users-list'},
    { id: 4, path: '/posts', title: 'Post-list'},
    { id: 5, path: '/_tailwind/', title: 'tailwind'},
    { id: 6, path: 'https://google.com', title: 'Google'},
  ]
  const title = '群珠連'
</script>

<template>
  <div>
    <!-- <header class="w-full absolute md:static bg-black px-2 py-2 z-50"> -->
    <header class=" bg-black px-2 py-2 z-50">
      <h1
        class="text-white text-xl my-2"
      >{{ title }}</h1>
      <!-- <div class="md:max-w-3xl mx-auto md:flex md:items-center"> -->
      <div class="mx-auto md:flex md:items-center">
        <!-- <div class="w-full md:flex mx-auto px-6 md:px-0 flex justify-between items-center h-16"> -->
        <div class="h-16">
          <div class="text-white md:hidden">
            <button class="focus:outline-none" @click="toggleStatus">
              <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  v-show="!showMenu"
                  d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
                />
                <path
                  v-show="showMenu"
                  d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
                />
              </svg>
            </button>
          </div>
        </div>
        <nav 
          :class="(showMenu) ? 'block' : 'hidden'"
          class="w-full md:block absolute left-0 md:static bg-black md:bg-none z-20"
        >
          <!-- <ul class="md:flex md:justify-end md:items-end"> -->
          <ul class="md:flex md:justify-center">
            <li
              v-for="job in jobs" :key="job.id"
              class="w-full md:w-auto md:ml-5"
            >
              <NuxtLink
                :to="job.path"
                @click="toggleStatus"
                class="text-white sm:hover:bg-gray-600 md:block inline-block md:py-0 py-2 px-5 md:px-0 w-full"
              >
                {{ job.title }}
              </NuxtLink>
            </li>
            <!-- <li class="w-full md:w-auto md:ml-5">
              <NuxtLink to="/"
              @click="toggleStatus"
              class="text-white sm:hover:bg-gray-600 md:block inline-block md:py-0 py-2 px-5 md:px-0 w-full"
              >TOP</NuxtLink>
            </li>
            <li class="w-full md:w-auto md:ml-5">
              <NuxtLink to="/about"
              @click="toggleStatus"
              class="text-white sm:hover:bg-gray-600 md:block inline-block md:py-0 py-2 px-5 md:px-0 w-full"
              >About</NuxtLink>
            </li>
              <li class="w-full md:w-auto md:ml-5">
              <NuxtLink to="/users/list"
              class="text-white sm:hover:bg-gray-600 md:block inline-block md:py-0 py-2 px-5 md:px-0 w-full"
              >User-List</NuxtLink>
            </li>
            <li class="w-full md:w-auto md:ml-5">
              <NuxtLink to="/posts"
              class="text-white sm:hover:bg-gray-600 md:block inline-block md:py-0 py-2 px-5 md:px-0 w-full"
              >Post-List</NuxtLink>
            </li>
            <li class="w-full md:w-auto md:ml-5">
              <NuxtLink to="/_tailwind/"
              class="text-white sm:hover:bg-gray-600 md:block inline-block md:py-0 py-2 px-5 md:px-0 w-full"
              >tailwind</NuxtLink>
            </li>
            <li class="w-full md:w-auto md:ml-5">
              <NuxtLink to="https://google.com"
              class="text-white sm:hover:bg-gray-600 md:block inline-block md:py-0 py-2 px-5 md:px-0 w-full"
              target="_blank">Google</NuxtLink>
            </li> -->
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>
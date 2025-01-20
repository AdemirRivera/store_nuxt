<template>
  <div class="min-h-full">
    <nav class="grid grid-cols-5 gap-2 py-3 px-12">

      <!-- logo -->
      <div class="text-2xl flex items-center">
        <FontAwesome icon="store" />
      </div>

      <!-- normal menu -->
      <div class="col-span-2 flex items-center justify-center">
        <ul class="flex">
          <li class="px-2">
            <NuxtLink to="/" class=""> Home </NuxtLink>
          </li>
          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto mx-3"
            >
              Categorías
              <FontAwesome icon="angle-down" class="ml-1" />
            </button>
            <!-- Dropdown menu -->
            <div
              class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
            >
              <ul
                class="py-2 text-sm text-gray-700"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="px-2">
            <NuxtLink to="/about" class=""> About </NuxtLink>
          </li>
          <li class="px-2">
            <NuxtLink to="/products" class=""> Products </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- search -->
      <div class="flex items-center justify-center">
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <FontAwesome icon="search" />
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full px-4 py-2 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-200 focus:ring-blue-300 focus:border-blue-300"
            placeholder="Search product"
            required
          />
        </div>
      </div>

      <!-- account and cart -->
      <div class="flex items-center justify-around">
        <div class="">
          <FontAwesome icon="user" />
          <span v-text="'account'" class="ml-1" />
        </div>

        <div class="">
          <FontAwesome icon="cart-shopping" />
          <span v-text="'cart'" class="ml-1" />
        </div>
      </div>
    </nav>

    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
</script>

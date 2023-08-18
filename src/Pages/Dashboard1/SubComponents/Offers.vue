<template>
  <div class="grid grid-cols-3 gap-4 mb-8">
    <div
      v-for="item in 3"
      :key="item"
      class="border rounded-lg flex justify-center items-end aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1598137203988-80de6392fc1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80')] object"
    >
      <div class="flex flex-col justify-center pb-5 text-center">
        <h1 class="text-3xl font-extrabold text-center text-white">
          Women's Collection
        </h1>
        <p class="text-center text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
          corporis.
        </p>
        <button class="w-1/3 px-4 py-2 mx-auto bg-white rounded-md">
          Shop
        </button>
      </div>
    </div>
  </div>
</template>
<script setup></script>

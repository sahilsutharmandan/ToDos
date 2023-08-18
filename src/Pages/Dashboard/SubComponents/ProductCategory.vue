<template>
  <h2 class="mb-5 text-2xl font-bold">Product Categories</h2>
  <div class="grid grid-cols-6 gap-4">
    <div
      v-for="item in productCategory"
      :key="item"
      class="flex items-center justify-center gap-3 px-8 py-4 text-lg text-white bg-gradient-to-r rounded-xl"
      :class="item.bgColor"
    >
      <i class="text-3xl fi" :class="item.icon"></i>
      <p class="font-medium">{{ item.label }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const productCategory = ref([
  {
    label: "Consumer Electronics",
    icon: "fi-rr-camera",
    bgColor: "from-red-500 to-orange-500",
  },
  {
    label: "Health & Beauty",
    icon: "fi-rr-soap",
    bgColor: "from-amber-200 to-yellow-400",
  },
  {
    label: "Home & Garden",
    icon: "fi-rr-tractor",
    bgColor: "from-blue-200 to-cyan-200",
  },
  {
    label: "Accessories",
    icon: "fi-rr-watch-smart",
    bgColor: "from-teal-400 to-yellow-200",
  },
  {
    label: "Women's Clothing",
    icon: "fi-rr-woman-head",
    bgColor: "from-violet-500 to-purple-500",
  },
  {
    label: "Men's Clothing",
    icon: "fi-rr-man-head",
    bgColor: "from-fuchsia-500 to-pink-500",
  },
]);
</script>

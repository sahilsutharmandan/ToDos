<template>
  <FullPageLayout>
    <div
      class="flex items-center justify-between overflow-hidden text-gray-700 px-28 rounded-xl h-52 bg-gradient-to-r from-violet-200 to-pink-200"
    >
      <div>
        <p class="flex items-center gap-1 font-semibold">
          Home<i class="fi fi-sr-bullet"></i>Product
        </p>
        <h1 class="text-4xl font-bold">All Products</h1>
      </div>
      <div class="flex items-end">
        <!-- <img class="h-64" src="@/assets/images/bags.png" alt="" /> -->
        <img class="h-72" src="@/assets/images/cart.png" alt="" />
      </div>
    </div>
    <div class="my-6">
      <ProductCategory />
    </div>
    <div class="my-6">
      <Products />
    </div>
  </FullPageLayout>
</template>
<script setup>
import ProductCategory from "./SubComponents/ProductCategory.vue";
</script>

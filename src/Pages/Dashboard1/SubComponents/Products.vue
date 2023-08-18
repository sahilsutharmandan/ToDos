<template>
  <div class="bg-white">
    <div
      class="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">
        Customers also purchased
      </h2>
      <div
        class="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="product in products"
          :key="product?.id"
          class="relative group"
        >
          <div
            class="w-full overflow-hidden bg-gray-200 rounded-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <img
              :src="product?.image"
              :alt="product?.image"
              class="object-cover object-center w-full h-full lg:h-full lg:w-full"
            />
          </div>
          <div class="flex justify-between mt-4">
            <div>
              <h3 class="text-sm font-bold text-gray-700 line-clamp-1">
                {{ product?.title }}
              </h3>
              <p class="mt-1 text-sm text-gray-500 line-clamp-2">
                {{ product?.description }}
              </p>
            </div>
            <p class="text-sm font-medium text-gray-900">
              ${{ product?.price }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { productsStore } from "@/stores/products";
import { computed, onMounted, ref, watch } from "vue";
const useProductStore = productsStore();
const products = useProductStore.products;

onMounted(() => {
  useProductStore.fetchProducts();
});
watch(products, (newVal) => {
  console.log("newVal");
  console.log(newVal);
});
</script>

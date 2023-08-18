<template>
  <div class="max-w-2xl px-4 py-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
    <div
      class="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
    >
      <div
        v-for="product in products"
        :key="product?.id"
        class="relative group"
      >
        <div
          class="p-4 rounded-xl w-full overflow-hidden bg-gray-300 aspect-[4/2] hover:opacity-75 lg:h-80 relative"
        >
          <img
            :src="product?.image"
            :alt="product?.image"
            class="object-fill w-full h-full aspect-1 lg:h-full lg:w-full mix-blend-color-burn"
          />
          <button
            @click="useProductStore.addProductToFavorite(product)"
            class="absolute top-0 right-0 p-3 bg-white rounded-bl-xl"
          >
            <i
              class="fi"
              :class="
                isFavorite(product.id)
                  ? 'fi-sr-heart text-red-500'
                  : 'fi-rs-heart'
              "
            ></i>
          </button>
        </div>
        <div class="mt-4">
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <p class="flex gap-2 mb-1">
                <i
                  v-for="i in 5"
                  :key="i"
                  class="fi"
                  :class="
                    i <= Math.floor(product?.rating.rate)
                      ? 'fi-sr-star text-yellow-500'
                      : 'fi-rr-star'
                  "
                ></i>
              </p>
              <span class="flex items-center gap-1">
                <i class="text-sm fi fi-sr-user"></i>
                <span>
                  {{ product?.rating?.count }}
                </span>
              </span>
            </div>
            <h3 class="text-sm font-bold text-gray-700 line-clamp-1">
              {{ product?.title }}
            </h3>
            <div class="flex justify-between">
              <p class="mt-1 text-sm text-gray-500 line-clamp-2">
                ${{ product?.price }}
              </p>
              <button
                @click="useProductStore.addProductToCart(product)"
                class="p-2 text-white duration-150 ease-linear border rounded-lg delay-50"
                :class="
                  isCart(product.id)
                    ? 'bg-sky-500 pointer-events-none'
                    : 'bg-gray-700 border-gary-700 hover:bg-inherit hover:text-inherit'
                "
              >
                <i
                  class="fi"
                  :class="
                    isCart(product.id)
                      ? 'fi-rr-shopping-cart-check'
                      : 'fi-rr-shopping-cart-add'
                  "
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { productsStore } from "@/stores/products";
const useProductStore = productsStore();
const products = useProductStore.products;
const isFavorite = computed(() => (productId) => {
  return useProductStore.favorite.some((el) => el.id === productId);
});
const isCart = computed(() => (productId) => {
  return useProductStore.cart.some((el) => el.id === productId);
});

onMounted(() => {
  useProductStore.fetchProducts();
});
</script>

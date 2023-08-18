<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="useModalsStore.closeCart()">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
        />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none top-[80px]"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="w-screen max-w-md pointer-events-auto">
                <div
                  class="flex flex-col h-full overflow-y-scroll bg-white shadow-xl"
                >
                  <div class="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-lg font-medium text-gray-900"
                        >Shopping cart</DialogTitle
                      >
                      <div class="flex items-center ml-3 h-7">
                        <button
                          type="button"
                          class="relative p-2 -m-2 text-gray-400 outline-none hover:text-gray-500"
                          @click="useModalsStore.closeCart()"
                        >
                          <span class="absolute -inset-0.5" />
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="w-6 h-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div class="mt-8">
                      <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                          <li
                            v-for="product in cart"
                            :key="product.id"
                            class="flex py-6"
                          >
                            <div
                              class="flex-shrink-0 w-24 h-24 p-5 overflow-hidden border border-gray-200 rounded-md"
                            >
                              <img
                                :src="product?.image"
                                :alt="product?.image"
                                class="object-fill w-full h-full"
                              />
                            </div>

                            <div class="flex flex-col flex-1 ml-4">
                              <div>
                                <div
                                  class="flex justify-between text-base font-medium text-gray-900"
                                >
                                  <h3 class="line-clamp-2">
                                    {{ product.title }}
                                  </h3>
                                  <div>
                                    <p class="flex items-end gap-1 ml-4">
                                      {{ formatCurrency(product.price) }}
                                      <span class="text-xs text-end"
                                        >x{{ product.quantity }}</span
                                      >
                                    </p>
                                  </div>
                                </div>
                                <p class="mt-1 text-sm text-gray-500">
                                  {{ product.category }}
                                </p>
                              </div>
                              <div
                                class="flex items-center justify-between flex-1 mt-2 text-sm"
                              >
                                <p
                                  class="flex items-center gap-2 text-gray-500"
                                >
                                  Qty:
                                  <span
                                    class="flex items-center text-center border rounded-lg"
                                  >
                                    <i
                                      @click="
                                        useProductStore.changeQuantity({
                                          value: '++',
                                          product: product,
                                        })
                                      "
                                      class="fi fi-rr-plus-small hover:bg-gray-100 p-1.5 cursor-pointer"
                                    >
                                    </i>
                                    <span class="!px-3 py-1.5 border-x">
                                      {{ product?.quantity }}
                                    </span>
                                    <i
                                      @click="
                                        useProductStore.changeQuantity({
                                          value: '--',
                                          product: product,
                                        })
                                      "
                                      class="fi fi-rr-minus-small hover:bg-gray-100 p-1.5 cursor-pointer"
                                    >
                                    </i>
                                  </span>
                                </p>

                                <div class="flex">
                                  <button
                                    @click="
                                      useProductStore.removeProductToCart(
                                        product
                                      )
                                    "
                                    type="button"
                                    class="font-medium text-sky-500 hover:text-sky-600"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="px-4 py-6 border-t border-gray-200 sm:px-6">
                    <div
                      class="flex justify-between text-base font-medium text-gray-900"
                    >
                      <p>Subtotal</p>
                      <p>{{ formatCurrency(calculateSubTotal) }}</p>
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div class="mt-6">
                      <a href="/checkout" class="btn btn-primary">Checkout</a>
                    </div>
                    <div
                      class="flex justify-center mt-6 text-sm text-center text-gray-500"
                    >
                      <p>
                        or
                        <button
                          type="button"
                          class="font-medium text-sky-500 hover:text-sky-600"
                          @click="useModalsStore.closeCart()"
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { computed, ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { modalsStore } from "@/stores/modal";
import { productsStore } from "@/stores/products";

const useProductStore = productsStore();
const useModalsStore = modalsStore();

const cart = ref(useProductStore.cart);
const calculateSubTotal = computed(() => {
  let total = 0;
  cart.value.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
});
const open = computed(() => {
  return useModalsStore.isCartOpen;
});
</script>

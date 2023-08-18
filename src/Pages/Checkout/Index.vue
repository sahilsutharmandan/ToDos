<template>
  <FullPageLayout>
    <div class="bg-gray-100 border rounded-xl lg:flex">
      <div class="flex-1 py-16 bg-white rounded-l-xl">
        <div class="max-w-[32rem] mx-auto">
          <button
            class="w-full py-2 text-center text-white bg-gray-700 rounded-lg"
          >
            Pay
          </button>

          <div class="relative my-8">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center">
              <span class="px-2 text-sm text-gray-500 bg-white">or</span>
            </div>
          </div>
          <div class="space-y-5">
            <Input v-model="email" label="Email address" />
            {{ email }}
            <Input label="Name on card" />
            <Input label="Card number" />
            <div class="grid grid-cols-3 gap-4">
              <Input class="col-span-2" label="Expiration date (MM/YY)" />
              <Input label="CVC" />
            </div>
            <div class="grid grid-cols-3 gap-4">
              <Input label="City" />
              <Input label="State / Province" />
              <Input label="Postal code" />
            </div>
            <div class="flex items-center gap-2">
              <input type="checkbox" name="" id="checkbox" />
              <label for="checkbox"
                >Billing address is the same as shipping address</label
              >
            </div>
            <button class="btn btn-primary">
              Pay {{ formatCurrency(calculateGrandTotal) }}
            </button>
            <p class="flex items-center justify-center gap-1">
              <i class="fi fi-rr-lock"></i> Payment details stored in plain text
            </p>
          </div>
        </div>
      </div>
      <div class="w-[29rem]">
        <div class="mt-8">
          <div class="flow-root">
            <ul role="list" class="divide-y divide-gray-200">
              <li v-for="product in cart" :key="product" class="flex py-6 mx-6">
                <div
                  class="flex-shrink-0 p-5 overflow-hidden bg-white rounded-md shadow w-28 h-28"
                >
                  <img
                    :src="product?.image"
                    :alt="product?.image"
                    class="object-fill w-full h-full"
                  />
                </div>

                <div class="flex-1 ml-4">
                  <div>
                    <div class="text-base font-medium text-gray-900">
                      <h3 class="line-clamp-2">{{ product.title }}</h3>
                      <div>
                        <p class="flex items-end gap-1">
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
                    class="flex items-center gap-1 mt-2 text-sm divide-x divide-gray-300"
                  >
                    <span
                      class="px-2 cursor-pointer text-sky-500 hover:text-sky-600"
                    >
                      Edit
                    </span>
                    <span
                      @click="useProductStore.removeProductToCart(product)"
                      class="px-2 cursor-pointer text-sky-500 hover:text-sky-600"
                    >
                      Remove
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="p-6 border-t">
          <div class="flex gap-2">
            <Input
              v-model="discount"
              label="Discount"
              placeholder="type 'sahil' for 10% discount"
            />
            <div class="pt-0.5">
              <button @click="calculateDiscount()" class="mt-5 btn btn-primary">
                Apply
              </button>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-5 mt-6">
            <p class="text-gray-500">Subtotal</p>
            <p class="font-medium text-gray-800 text-end">
              {{ formatCurrency(calculateSubTotal) }}
            </p>
            <p class="text-gray-500">
              Discount
              <span
                v-if="discountCoupon"
                class="px-2 py-.5 text-sm bg-gray-200 rounded-full text-medium"
                >{{ discountCoupon }}</span
              >
            </p>
            <p class="font-medium text-gray-800 text-end">
              -{{ formatCurrency(discountedAmount) }}
            </p>
            <p class="text-gray-500">Taxes 5%</p>
            <p class="font-medium text-gray-800 text-end">
              {{ formatCurrency(calculateTaxes) }}
            </p>
            <p class="text-gray-500">Shipping</p>
            <p class="font-medium text-gray-800 text-end">
              {{ formatCurrency(shipping) }}
            </p>
            <div class="flex justify-between col-span-2 py-4 border-t">
              <p class="text-gray-500">Total</p>
              <p class="font-medium text-gray-800 text-end">
                {{ formatCurrency(calculateGrandTotal) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </FullPageLayout>
</template>
<script setup>
import { ref, computed } from "vue";
import { productsStore } from "@/stores/products";

const useProductStore = productsStore();
const cart = ref(useProductStore.cart);
const email = ref("");
const discount = ref("");
const discountedAmount = ref(0);
const shipping = ref(5);
const discountCoupon = ref("");

const calculateSubTotal = computed(() => {
  let total = 0;
  cart.value.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
});
const calculateTaxes = computed(() => {
  return (calculateSubTotal.value * 5) / 100;
});
const calculateDiscount = () => {
  if (discount.value === "sahil") {
    discountedAmount.value = (calculateSubTotal.value * 10) / 100;
    discountCoupon.value = "sahil";
  } else {
    discountedAmount.value = 0;
    discountCoupon.value = "";
  }
};
const calculateGrandTotal = computed(() => {
  return (
    calculateSubTotal.value +
    calculateTaxes.value +
    shipping.value -
    discountedAmount.value
  );
});
</script>

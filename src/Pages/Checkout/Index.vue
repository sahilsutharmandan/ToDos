<template>
  <FullPageLayout>
    <div class="h-screen gap-4 bg-gray-100 border rounded-xl lg:flex">
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
            <Input label="Email address" />
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
          </div>
        </div>
      </div>
      <div class="w-[28rem]"></div>
    </div>
  </FullPageLayout>
</template>

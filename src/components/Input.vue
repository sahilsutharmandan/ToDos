<template>
  <div>
    <label class="mb-1" :for="id">{{ label }}</label>
    <input
      class="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-sky-500 ring-0"
      v-bind="{ ...attr }"
      :id="id"
      type="text"
    />
  </div>
</template>
<script setup>
const props = defineProps({
  id: {
    type: String,
    default: `input_${Math.floor(Math.random())}`,
  },
  label: {
    type: String,
  },
});
</script>

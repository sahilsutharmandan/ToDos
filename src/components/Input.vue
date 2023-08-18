<template>
  <div>
    <label class="mb-1" :for="id">{{ label }}</label>

    <input
      class="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-sky-500 ring-0"
      :name="name"
      :id="name"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  id: {
    type: String,
    default: `input_${Math.floor(Math.random() * 1000000)}`,
  },
  label: {
    type: String,
  },
  modelValue: {
    type: String,
  },
});
</script>

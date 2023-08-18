<template>
  <div class="grid grid-cols-4 gap-6 p-4 border">
    <div v-for="item in products" :key="item">
      <img :src="item.thumbnail" alt="" class="rounded-md object-fit" />
      <div class="grid grid-flow-col gap-3">
        <div v-for="pic in item.images" :key="pic">
          <img :src="pic" alt="" class="rounded-md object-fit" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
const products = ref([]);
const apiKey = "QuLR8M3ANzBXTfRUUzBEHI6hcPkitOrLWruyG1ZEEGGqyAXI";
const url = "https://api.flaticon.com/v2/items/";

const fetchIcons = async () => {
  await axios
    .get("https://dummyjson.com/products")
    .then((res) => (products.value = res.data.products))
    .then(console.log);
};
onMounted(() => {
  fetchIcons();
});
</script>

<style>
/* Your component styles */
</style>

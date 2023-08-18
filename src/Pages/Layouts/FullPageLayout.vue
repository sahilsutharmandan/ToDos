<template>
  <div class="mx-auto bg-white">
    <NavBar />

    <div class="pb-6 mx-auto max-w-7xl">
      <slot> </slot>
    </div>
    <Cart />
  </div>
</template>

<script setup>
import NavBar from "./NavBar.vue";
</script>

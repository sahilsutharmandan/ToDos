<template>
  <div class="mx-auto bg-white">
    <NavBar />

    <div class="mx-auto max-w-7xl">
      <slot> </slot>
    </div>
  </div>
</template>

<script setup>
import NavBar from "./NavBar.vue";
</script>

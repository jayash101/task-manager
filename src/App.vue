<template>
  <Navbar />

  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";

import Navbar from "./components/Navbar.vue";
</script>

<style scoped>
main {
  min-height: 90vh;
  padding: 0 2vw;
}
</style>

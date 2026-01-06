<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/tasks">Tasks</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped></style>

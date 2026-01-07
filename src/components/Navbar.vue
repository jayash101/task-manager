<template>
  <nav>
    <ul>
      <RouterLink
        v-for="link in links"
        :key="link.id"
        :to="link.to"
        :class="{
          active: route.path === link.to,
        }"
        class="link"
      >
        {{ link.label }}
      </RouterLink>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { NAV_LINKS as links } from "../utils/constant";

const route = useRoute();
</script>

<style scoped>
nav {
  min-height: 10vh;
  display: flex;
}

nav ul {
  padding: 2vh 1vw;
  display: flex;
  justify-content: center;
  gap: 1.75rem;
  background: #03045e;
  background: linear-gradient(90deg, #03045e 0%, #023e8a 50%, #0077b6 100%);
  color: #caf0f8;
  border-radius: 1.5rem;
  width: fit-content;
  margin: auto;
}

.link:hover {
  color: #ffa500;
}

.active {
  color: #ed2;
}
</style>

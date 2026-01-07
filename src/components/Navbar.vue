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
  padding: 2vh 2vw;
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

/* Tablets (≤ 1024px) */
@media (max-width: 1024px) {
  nav ul {
    padding: 2vh 4vw;
    gap: 1.25rem;
  }
}

/* Mobile (≤ 768px) */
@media (max-width: 768px) {
  nav {
    min-height: auto;
  }

  nav ul {
    width: 80%;
    margin-top: 2vh;
    justify-content: space-around;
    padding: 2vh 4vw;
    border-radius: 1rem;
    gap: 0;
  }

  .link {
    font-size: 0.95rem;
    text-align: center;
  }
}

/* Small Mobile (≤ 480px) */
@media (max-width: 480px) {
  nav ul {
    padding: 1.5vh 3vw;
  }

  .link {
    font-size: 0.9rem;
  }
}
</style>

<template>
  <section class="sidebar">
    <button
      v-for="btn in sbuttons"
      :key="btn.id"
      @click="
        {
          filter = btn.id as Filter;
        }
      "
      :class="{ active: filter === btn.id }"
    >
      {{ btn.label }}
    </button>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useFilters } from "../store/tasks";
import type { Filter } from "../types/task.types";
import { SIDEBAR_BUTTONS as sbuttons } from "../utils/constant";

const filter = ref<Filter>("all");

const { setFilter } = useFilters();

watch(filter, () => {
  setFilter(filter.value);
});
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 2vh;
  width: fit-content;
  background-color: #03045e30;
  padding: 3vh 1vw;
  border-radius: 0.4rem;
}

.sidebar button {
  padding: 1vh 1.5vw;
  border-radius: 0.25rem;
  background: #03045e;
  background: linear-gradient(90deg, #03045e 0%, #023e8a 50%, #0077b6 100%);
  color: #caf0f8;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.sidebar button.active {
  background: #ffa500;
  color: #ffe;
}

.sidebar button:hover:not(.active) {
  opacity: 0.6;
  transition: opacity 0.2s ease;
}
</style>

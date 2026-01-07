<template>
  <section class="tasks-section">
    <Sidebar />

    <section class="tasks">
      <section class="tasks-top-section">
        <h1>{{ filter }} Tasks</h1>

        <RouterLink to="/add">
          <button>Add Task</button>
        </RouterLink>
      </section>

      <ul>
        <TaskList />
      </ul>
    </section>
  </section>
</template>

<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue";
import TaskList from "../components/TaskList.vue";
import { useFilters } from "../store/tasks";

const { filter } = useFilters();
</script>

<style scoped>
.tasks-section {
  display: flex;
  align-items: start;
  gap: 4vw;
  padding: 8vh 0;
}

.tasks {
  display: flex;
  flex-direction: column;
  gap: 4vh;
  width: 100%;
}

.tasks-top-section {
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;

  h1 {
    text-transform: capitalize;
  }
}

.tasks-top-section button {
  padding: 1vh 1vw;
  border-radius: 0.5rem;
  background-color: #ffa500;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
}

.tasks-top-section button:hover {
  background-color: #ff8c00;
}

.tasks ul {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2vw;
}
</style>

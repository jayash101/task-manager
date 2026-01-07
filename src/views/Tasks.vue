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

/* Tablets (≤ 1024px) */
@media (max-width: 1024px) {
  .tasks-section {
    gap: 3vw;
    padding: 6vh 2vw;
  }

  .tasks ul {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 3vw;
  }
}

/* Mobile (≤ 768px) */
@media (max-width: 768px) {
  .tasks-section {
    flex-direction: column;
    padding: 5vh 4vw;
    gap: 4vh;
  }

  /* Sidebar stacks on top */
  .tasks-section > *:first-child {
    width: 100%;
  }

  .tasks-top-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 2vh;
  }

  .tasks-top-section h1 {
    font-size: 1.6rem;
  }

  .tasks-top-section button {
    padding: 1.2vh 4vw;
    font-size: 1rem;
  }

  .tasks ul {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 4vw;
  }
}

/* Small Mobile (≤ 480px) */
@media (max-width: 480px) {
  .tasks-section {
    padding: 4vh 4vw;
  }

  .tasks-top-section h1 {
    font-size: 1.4rem;
  }

  .tasks ul {
    grid-template-columns: 1fr;
    gap: 4vh;
  }
}
</style>

<template>
  <section class="home-section">
    <section class="hero-section">
      <article>
        <h1>Task Manager</h1>

        <p>A simple app to manage your daily work.</p>
      </article>

      <RouterLink to="/add" class="cta">
        <button>Create a task</button>
      </RouterLink>
    </section>

    <section class="featured-tasks">
      <article>
        <h2>Latest Tasks</h2>

        <RouterLink to="/tasks" class="see-all-link">See all tasks</RouterLink>
      </article>

      <!-- tasks here -->
      <ul class="tasks">
        <TaskList link="/" />
      </ul>
    </section>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import TaskList from "../components/TaskList.vue";
</script>

<style scoped>
.home-section {
  min-height: inherit;
  display: flex;
  flex-direction: column;
  gap: 8vh;
  padding: 8vh 0;
}

.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4vh;
  background-color: #eafafe;
  padding: 6vh 0 4vh;
}

.hero-section article {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.1rem;
  }
}

.cta button {
  padding: 1vh 1vw;
  border-radius: 0.5rem;
  background-color: #ffa500;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
}

.cta button:hover {
  background-color: #ff8c00;
}

.featured-tasks {
  display: flex;
  flex-direction: column;
  gap: 4vh;

  article {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  h2 {
    font-size: 1.75rem;
  }
}

.see-all-link {
  color: #32f;
  font-weight: 500;
  transition: color 0.25s ease;
  font-size: 0.9rem;
}

.see-all-link:hover {
  color: #40d0ef;
  text-decoration: underline;
  text-underline-offset: 0.4vh;
  transition: color 0.25s ease;
}

.tasks {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  width: 100%;
}

.tasks ul li {
  padding: 1vw;
}
</style>

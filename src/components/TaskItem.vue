<template>
  <section class="todo-item">
    <article>
      <div class="checkbox-container">
        <button
          @click="toggleTask(task.id)"
          class="check-btn"
          :class="{ checked: task.completed }"
        >
          <span class="checkmark"></span>
        </button>
      </div>

      <p :class="{ done: task.completed }">
        {{ task.title }}
      </p>
    </article>

    <section class="button-container">
      <button
        @click="emit('remove')"
        class="remove-btn"
        :class="{ hidden: route.path === '/' }"
      >
        Delete
      </button>

      <RouterLink
        :to="`/task/${task.id}`"
        class="details-btn"
        :style="{ margin: route.path === '/' ? '0 auto' : 'none' }"
      >
        <button>More details</button>
      </RouterLink>
    </section>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useTasks } from "../store/tasks";
import { type Task } from "../types/task.types";

const props = defineProps<{
  task: Task;
}>();

const emit = defineEmits<{
  (e: "remove"): void;
}>();

const route = useRoute();

const { toggleTask } = useTasks();
</script>

<style scoped>
.todo-item {
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 2vw;
  padding: 1vw;
  border-radius: 0.4rem;
  background: #caf0f8;
  background: linear-gradient(
    90deg,
    rgba(202, 240, 248, 1) 0%,
    rgba(173, 232, 244, 1) 50%,
    rgba(144, 224, 239, 1) 100%
  );
  box-shadow: 0 0.5vh 0.2vw #aaa;

  article {
    display: flex;
    align-items: center;
    gap: 1vw;

    p {
      color: #03048e;
    }
  }
}

.checkbox-container {
  text-align: center;
}

.check-btn {
  background-color: #fff;
  border: 2px solid #ccc;
  padding: 0.5vw;
  border-radius: 0.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.3s ease;
}

.check-btn:hover {
  filter: brightness(0.8);
}

.check-btn.checked:hover {
  filter: brightness(1);
}

.check-btn:focus {
  outline: none;
}

.button-container {
  display: flex;
  align-items: center;
  gap: 1vw;
}

.remove-btn {
  background-color: #ff2500;
  padding: 1vh 1vw;
  border-radius: 0.5rem;
  color: #ffffff;
  cursor: pointer;
  width: fit-content;
}

.remove-btn:hover {
  filter: contrast(0.7);
}

.details-btn button {
  background-color: #0025cc;
  padding: 1vh 1vw;
  border-radius: 0.5rem;
  color: #ffffff;
  cursor: pointer;
  width: fit-content;
}

.details-btn button:hover {
  background-color: #0025cc90;
}

.checked {
  background-color: #00a0ff;
  border-color: #00a0ff;
}

.done {
  text-decoration: line-through;
  text-decoration-color: #00c0ff;
  opacity: 0.6;
}

.hidden {
  display: none;
}

/* Tablets (≤ 1024px) */
@media (max-width: 1024px) {
  .todo-item {
    width: 100%;
    padding: 2vw;
    gap: 2vh;
  }

  .todo-item article {
    gap: 2vw;
  }

  .button-container {
    gap: 2vw;
  }
}

/* Mobile (≤ 768px) */
@media (max-width: 768px) {
  .todo-item {
    width: 100%;
    padding: 3vw;
  }

  .todo-item article {
    align-items: flex-start;
  }

  .todo-item article p {
    font-size: 0.95rem;
    line-height: 1.4;
  }

  .check-btn {
    padding: 1.5vw;
  }

  .button-container {
    flex-direction: column;
    align-items: stretch;
    gap: 1.5vh;
  }

  .remove-btn,
  .details-btn button {
    width: 100%;
    padding: 1.2vh 0;
    font-size: 0.95rem;
  }
}

/* Small Mobile (≤ 480px) */
@media (max-width: 480px) {
  .todo-item {
    padding: 4vw;
  }

  .todo-item article p {
    font-size: 0.9rem;
  }

  .check-btn {
    padding: 2vw;
  }
}
</style>

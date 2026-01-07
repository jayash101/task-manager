<template>
  <section class="add-tasks-section">
    <h1>Add a Task</h1>

    <section class="form">
      <Input label="Task title" v-model="title" />

      <Input label="Task Slug" v-model="slug" disabled />

      <button class="submit-task" @click="handleSubmit">Submit</button>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import Input from "../components/Input.vue";
import { useTasks } from "../store/tasks";

const title = ref("");
const slug = ref("");

const { addTask } = useTasks();

const generateSlug = (text: string) => {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

const handleSubmit = () => {
  if (!title.value) return;

  addTask(title.value);

  title.value = "";
  slug.value = "";
};

watch(title, (newSlug) => {
  slug.value = generateSlug(newSlug);
});
</script>

<style scoped>
.add-tasks-section {
  display: flex;
  flex-direction: column;
  gap: 2vw;
  padding: 4vh 2vw;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 2vh;
  padding: 2vh 1vw;
  padding-top: 4vh;
  background: #caf0f8;
  background: linear-gradient(
    90deg,
    rgba(202, 240, 248, 1) 0%,
    rgba(173, 232, 244, 1) 50%,
    rgba(144, 224, 239, 1) 100%
  );
}

.submit-task {
  padding: 1vh 1vw;
  border-radius: 0.2rem;
  background: #03045e;
  background: linear-gradient(
    90deg,
    rgba(3, 4, 94, 1) 0%,
    rgba(2, 62, 138, 1) 50%,
    rgba(0, 119, 182, 1) 100%
  );
  color: #fff;
  font-size: 1rem;
  margin-top: 1vh;
  width: fit-content;
  cursor: pointer;
}

.submit-task:hover {
  filter: contrast(1.25);
}

/* Tablets (≤ 1024px) */
@media (max-width: 1024px) {
  .add-tasks-section {
    padding: 4vh 4vw;
    gap: 3vh;
  }

  .form {
    padding: 3vh 3vw;
  }
}

/* Mobile (≤ 768px) */
@media (max-width: 768px) {
  .add-tasks-section {
    padding: 3vh 4vw;
  }

  .add-tasks-section h1 {
    font-size: 1.8rem;
    text-align: center;
  }

  .form {
    padding: 3vh 4vw;
    gap: 2.5vh;
  }

  .submit-task {
    width: 100%;
    padding: 1.5vh 0;
    text-align: center;
    font-size: 1rem;
  }
}

/* Small Mobile (≤ 480px) */
@media (max-width: 480px) {
  .add-tasks-section h1 {
    font-size: 1.6rem;
  }

  .form {
    padding: 3vh 5vw;
  }

  .submit-task {
    font-size: 0.95rem;
  }
}
</style>

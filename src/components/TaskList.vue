<template>
  <TaskItem
    v-for="task in filteredTasks"
    :task="task"
    @remove="removeTask(task.id)"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useFilters, useTasks } from "../store/tasks";
import TaskItem from "./TaskItem.vue";

const props = defineProps<{
  link?: string;
}>();

const { tasks, removeTask } = useTasks();
const { filter } = useFilters();

const filteredTasks = computed(() => {
  if (filter.value === "active") {
    return latestTasks.value.filter((task) => !task.completed);
  }

  if (filter.value === "completed") {
    return latestTasks.value.filter((task) => task.completed);
  }

  return latestTasks.value;
});

const latestTasks = computed(() => {
  if (props.link !== "/") return tasks.value;

  return tasks.value
    .sort((taskA, taskB) => Number(taskB.id) - Number(taskA.id))
    .slice(0, 7);
});
</script>

<style scoped></style>

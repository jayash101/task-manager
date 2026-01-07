import { ref, watch } from "vue";
import type { Filter, Task } from "../types/task.types";

const savedTasks = localStorage.getItem("tasks");

const tasks = ref<Task[]>(savedTasks ? JSON.parse(savedTasks) : []);
const filter = ref<Filter>("all");

export const useTasks = () => {
  const addTask = (title: string) => {
    if (!title) return "Empty title! Please add one";

    tasks.value.push({
      id: Date.now().toString(),
      title,
      completed: false,
    });
  };

  const toggleTask = (id: string) => {
    const task = tasks.value.find((t) => t.id === id);

    if (!task) return;

    task.completed = !task.completed;
  };

  const removeTask = (id: string) => {
    tasks.value = tasks.value.filter((task) => task.id !== id);
  };

  watch(
    tasks,
    (newTask) => {
      localStorage.setItem("tasks", JSON.stringify(newTask));
    },
    { deep: true }
  );

  return { tasks, addTask, toggleTask, removeTask };
};

export const useFilters = () => {
  const setFilter = (value: Filter) => {
    filter.value = value;
  };

  return { filter, setFilter };
};

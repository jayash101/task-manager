import { ref } from "vue";
import type { Task } from "../types/task.types";

const tasks = ref<Task[]>([
  { id: "learn-vue", title: "Learn Vue", completed: false },
  { id: "build-projects", title: "Build projects", completed: false },
]);

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

    if (!task) return "Task not found";

    task.completed = !task.completed;
  };

  return { tasks, addTask, toggleTask };
};

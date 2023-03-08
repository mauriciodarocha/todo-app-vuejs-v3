import { ref } from "vue";
import { defineStore } from "pinia";

export type TodoType = { status: string; description: string };

const initialTodos: TodoType[] = [
  { status: "pending", description: "buy groceries"},
  { status: "pending", description: "buy staples"},
]

export const useTodoStore = defineStore("todos", () => {
  const todos = ref<TodoType[]>(initialTodos)
  function addTodos(newTodo: TodoType) {
    todos.value.push(newTodo);
  }
  function markAsDone(index: number) {
    todos.value[index].status = todos.value[index].status != "done" ? "done" : "pending"
  }
  return {
    todos,
    addTodos,
    markAsDone,
  };
});

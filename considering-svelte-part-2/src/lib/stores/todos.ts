import { derived, writable } from "svelte/store";
import type { Todo } from "../types.js";

export const todos = writable<Todo[]>([]);

export const completed = derived(todos, ($todos) => {
  return $todos.filter((t) => t.completed);
});

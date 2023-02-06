import dayjs from "dayjs";
import type { Todo } from "./types";

export const generateNewTodo = (
  title = "New todo",
  active = true,
  date = dayjs().toString()
): Todo => ({
  id: Math.random(),
  title,
  active,
  date,
});

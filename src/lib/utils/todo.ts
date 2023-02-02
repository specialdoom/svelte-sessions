import dayjs from "dayjs";
import type { Todo } from "./types";

export const generateNewTodo = (
  title = "New todo",
  active = false,
  date = dayjs()
): Todo => ({
  id: Math.random(),
  title,
  active,
  date,
});

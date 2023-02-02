import dayjs, { Dayjs } from "dayjs";
import type { Task, TaskType } from "./types";

export const TASKS: Readonly<{
  [key in TaskType]: string;
}> = Object.freeze({
  eating: "🍕",
  working: "⚒️",
  break: "⏸️",
  symptom: "🩺",
  default: "🖐️",
  todo: "✅",
  dancing: "💃",
  reading: "📖",
  "night-out": "🌃",
  cooking: "🍳",
  cleaning: "🧹",
  relaxing: "🛋️",
  programming: "💻",
});

export function generateNewTask(
  date: Dayjs = dayjs(),
  title: string = "",
  type: TaskType = "default",
  description: string = ""
): Task {
  return {
    date,
    title,
    description,
    type,
  };
}

import type { Dayjs } from "dayjs";

export type Constructor<T> = new (...args: any[]) => T;

export type TaskType =
  | "eating"
  | "working"
  | "break"
  | "symptom"
  | "default"
  | "todo"
  | "dancing"
  | "reading"
  | "night-out"
  | "cooking"
  | "cleaning"
  | "relaxing";

export interface Task {
  date: string;
  title: string;
  description: string;
  type: TaskType;
  todoId?: number;
}

export interface Day {
  tasks: Task[];
  date: Dayjs;
}

export type Days = {
  [key: string]: Day;
};

export interface Todo {
  id: number;
  title: string;
  active: boolean;
  date: string;
}

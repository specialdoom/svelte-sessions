import type { Dayjs } from "dayjs";

export type Constructor<T> = new (...args: any[]) => T;

export type TaskType = "break" | "eat" | "work" | "custom" | "symptom";

export interface Task {
    date: Dayjs;
    title: string;
    description: string;
    type: TaskType;
}

export interface Day {
    tasks: Task[];
    date: Dayjs;
}

export type Days = {
    [key: string]: Day
}

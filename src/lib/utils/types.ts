import type dayjs from "./day-js";

export type Constructor<T> = new (...args: any[]) => T;

export type TaskType = "eating" |
    "working" |
    "break" |
    "symptom" |
    "default" |
    "todo" |
    "dancing" |
    "reading" |
    "night-out" |
    "cooking" |
    "cleaning" |
    "relaxing";

export interface Task {
    date: dayjs.Dayjs;
    title: string;
    description: string;
    type: TaskType;
    timestamp: Date;
    todoId?: string;
}

export interface Day {
    tasks: Task[];
    date: dayjs.Dayjs;
}

export type Days = {
    [key: string]: Day
}

export interface Todo {
    id: string;
    title: string;
    active: boolean;
    date: dayjs.Dayjs;
}

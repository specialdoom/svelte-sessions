import dayjs from "../utils/day-js";
import { writable } from "svelte/store";
import type { Task } from "../utils/types";

export const tasks = writable<Task[]>([]);
export const current = writable<dayjs.Dayjs>(dayjs());
export const min = writable<dayjs.Dayjs>(dayjs());
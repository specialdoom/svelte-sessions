import dayjs from "../utils/day-js";
import { writable } from "svelte/store";
import type { Task } from "../utils/types";

interface Timeline {
    tasks: Task[],
    current: dayjs.Dayjs
}

export const timeline = writable<Timeline>({
    tasks: [],
    current: dayjs()
});
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { writable } from "svelte/store";
import { getDayId } from "../utils/day";
import type { Day, Days, Task } from "../utils/types";

export const days = writable<Days>({});
export const current = writable<Dayjs>(dayjs());

export function newDay(day: Day) {
    days.update(currentDays => {
        currentDays[getDayId(day.date)] = day;

        return currentDays;
    }
    );
}

export function newTask(dayId: string, task: Task) {
    days.update(currentDays => {
        currentDays[dayId].tasks = [...currentDays[dayId].tasks, task];

        return currentDays;
    })
}
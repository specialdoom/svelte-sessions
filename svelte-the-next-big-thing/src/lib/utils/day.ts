import dayjs from "./day-js";
import type { Dayjs } from "dayjs";

export function getDayId(day?: Dayjs) {
    if (!day) return dayjs().format("DDMMYYYY");

    return day.format("DDMMYYYY");
}
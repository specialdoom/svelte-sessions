import dayjs from "./day-js";
import type { Dayjs } from "dayjs";

export function getDayId(day?: Dayjs) {
    if (!day) return dayjs().format("DD/MM/YYYY");

    return day.format("DD/MM/YYYY");
}
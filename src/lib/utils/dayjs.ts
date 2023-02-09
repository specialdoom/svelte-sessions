import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import type { Dayjs as DayjsType } from "dayjs";

dayjs.extend(isToday);

export type Dayjs = DayjsType;

export default dayjs;

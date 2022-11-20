import dayjs from "./day-js"
import type {
    Task,
    TaskType
} from "./types"

export const TASKS: Readonly<{
    [key in TaskType]: string
}> = Object.freeze({
    "eat": "🍕",
    "work": "⚒️",
    "break": "🛋️",
    "symptom": "🩺",
    "custom": "💻"
})

export function generateNewTask(): Task {
    return {
        date: dayjs(),
        title: "",
        description: "",
        type: "custom",
    }
}
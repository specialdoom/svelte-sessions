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
    "custom": "💻",
    "todo": "✅"
})

export function generateNewTask(
    title: string = "",
    type: TaskType = "custom",
    description: string = ""): Task {
    return {
        date: dayjs(),
        title,
        description,
        type,
        timestamp: new Date()
    }
}
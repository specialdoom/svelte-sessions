import dayjs from "./day-js"
import type {
    Task,
    TaskType
} from "./types"

export const TASKS: Readonly<{
    [key in TaskType]: string
}> = Object.freeze({
    "eating": "🍕",
    "working": "⚒️",
    "break": "⏸️",
    "symptom": "🩺",
    "default": "🖐️",
    "todo": "✅",
    "dancing": "💃",
    "reading": "📖",
    "night-out": "🌃",
    "cooking": "🍳",
    "cleaning": "🧹",
    "relaxing": "🛋️"
})

export function generateNewTask(
    title: string = "",
    type: TaskType = "default",
    description: string = ""): Task {
    return {
        date: dayjs(),
        title,
        description,
        type,
        timestamp: new Date()
    }
}
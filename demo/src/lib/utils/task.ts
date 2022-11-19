import type {
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
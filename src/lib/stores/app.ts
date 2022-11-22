import { writable } from "svelte/store";

export const settings = writable({
    weather: true,
    todos: true,
    greetings: true
});

export function setSettings(newSettings) {
    settings.update(newSettings);
}
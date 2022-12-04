import { writable } from "svelte/store";

export const settings = writable({
    weather: true,
    todos: true,
    greetings: true,
    locationBlock: false
});

export function setSettings(newSettings) {
    settings.update(newSettings);
}
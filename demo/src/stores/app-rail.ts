import { writable, type Writable } from "svelte/store";

export const appRailStore: Writable<number> = writable(1);

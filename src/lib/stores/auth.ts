import { writable } from "svelte/store";

export const auth = writable({
    email: "",
    name: "",
    uid: "",
    isAnonymous: false
});
import { writable } from "svelte/store"

import type { ICountStore } from "./interface";

const countStore = writable<number>(0,)

export class CountStore implements ICountStore {
    subscribe = countStore.subscribe;
    increment = () => countStore.update((n) => n + 1)
    decrement = () => countStore.update((n) => n - 1)
    reset = () => countStore.set(0)
}

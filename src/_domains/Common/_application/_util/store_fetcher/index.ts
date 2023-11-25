import { useQuery } from "@sveltestack/svelte-query";
import type { Writable } from "svelte/store";

export class StoreFetcher {
    constructor(store: Writable<number>) {
        console.log(store)
    }

    fetch = () => {
        const queryResult = useQuery('todos', fetchTodos,)
    }
}
import { useQuery, type QueryFunction, type UseQueryOptions, type UseQueryStoreResult, } from "@sveltestack/svelte-query";
import type { Writable } from "svelte/store";

export class StoreFetcher {
    constructor(
        private _store: Writable<UseQueryStoreResult>,
        private _queryFunction: QueryFunction,
        private _options?: UseQueryOptions) {
    }

    fetch = () => {
        const queryResult = useQuery('', this._queryFunction, this._options)
        this._store.set(queryResult)

        return queryResult
    }
}
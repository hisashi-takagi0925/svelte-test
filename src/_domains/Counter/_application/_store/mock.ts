import type { ICountStore } from "./interface";

export class MockCountStore implements ICountStore {
    count = 0;

    increment = () => { this.count += 1; }
    decrement = () => { this.count -= 1; }
    reset = () => { this.count = 0; }

    getCount = () => this.count;
}
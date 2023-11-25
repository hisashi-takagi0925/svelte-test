import { CountStore } from "../../_store"

export const incrementCount = () => {
    const countStore = new CountStore()
    countStore.increment()
    alert(countStore)
}

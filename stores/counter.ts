import { createEvent, createStore } from "effector";

export const incrementConter = createEvent()
export const nocrementConter = createEvent()
export const randomcrementConter = createEvent()

export const $counter = createStore<number>(112)
    .on(incrementConter, (start) => start + 1)
    .on(nocrementConter, (start) => start - 1)
    .on(randomcrementConter, (start) => start=Math.floor(Math.random()*(500-0)+0) )
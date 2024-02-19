import { Fun } from "./function";

const increment: Fun<[value: number], number> = (x) => x + 1;

console.log("increment(1)", increment(1)); // 2

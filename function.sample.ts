import { Fun } from "./function";

const increment: Fun<number, number> = (x) => x + 1;

console.log("increment(1)", increment(1)); // 2

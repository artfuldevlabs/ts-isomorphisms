import { Morphism } from "./morphism";
import { Iso } from "./iso";

const increment: Morphism<number, number> = (x) => x + 1;

export const invalid: Iso<number, number> = [increment, increment];

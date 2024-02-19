import { Iso } from "./iso";
import { NaturalNumber, Square } from "./types";

export const square: Iso<NaturalNumber, Square> = [
  (a) => a * a,
  (b) => Math.sqrt(b),
];

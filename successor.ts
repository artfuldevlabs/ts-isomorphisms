import { Iso } from "./iso";
import { NaturalNumber, WholeNumber } from "./types";

export const successor: Iso<WholeNumber, NaturalNumber> = [
  (a) => a + 1,
  (b) => b - 1,
];

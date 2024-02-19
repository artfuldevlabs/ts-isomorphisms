import { Iso } from "./iso";
import { NaturalNumber, NumericString } from "./types";

export const numeric: Iso<NaturalNumber, NumericString> = [
  (a) => a.toString(),
  (b) => parseInt(b, 10),
];

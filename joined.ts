import { Iso } from "./iso";
import { numeric } from "./numeric";
import { Joined, List, NaturalNumber } from "./types";

export const joined: Iso<List<NaturalNumber>, Joined> = [
  (as) => as.map(numeric[0]).join(","),
  (b) => b.split(",").filter(Boolean).map(numeric[1]),
];

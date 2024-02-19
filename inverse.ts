import { Iso } from "./iso";

export const inverse = <A, B>([ab, ba]: Iso<A, B>): Iso<
  B,
  A
> => [ba, ab];

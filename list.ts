import { Iso } from "./iso";
import { List } from "./types";

export const list = <A, B>([ab, ba]: Iso<A, B>): Iso<
  List<A>,
  List<B>
> => [(as) => as.map(ab), (bs) => bs.map(ba)];

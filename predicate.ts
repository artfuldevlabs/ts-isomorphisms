import { Fun } from "./function";
import { List } from "./types";

export type Predicate<Arg> = Fun<Arg, boolean>;

export const equals =
  <A>(a: A): Predicate<A> =>
  (b) =>
    b === a;

export const sequence_equals =
  <A>(as: List<A>): Predicate<List<A>> =>
  (bs) =>
    bs.length === as.length && as.every((a, i) => a === bs[i]);

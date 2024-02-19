import { Fun } from "./function";
import { List } from "./types";

export type Predicate<Args extends [any]> = Fun<Args, boolean>;

export const equals =
  <A>(a: A): Predicate<[a: A]> =>
  (b) =>
    b === a;

export const sequence_equals =
  <A>(as: List<A>): Predicate<[as: List<A>]> =>
  (bs) =>
    bs.length === as.length && as.every((a, i) => a === bs[i]);

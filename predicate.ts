import { Morphism } from "./morphism";
import { List } from "./types";

export type Predicate<Arg> = Morphism<Arg, boolean>;

export type Equals<A> = Morphism<A, Predicate<A>>;

export const equals =
  <A>(a: A): Predicate<A> =>
  (b) =>
    b === a;

export const sequence_equals =
  <A>(as: List<A>): Predicate<List<A>> =>
  (bs) =>
    bs.length === as.length && as.every((a, i) => a === bs[i]);

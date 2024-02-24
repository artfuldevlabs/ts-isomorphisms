import { Morphism, Target } from "./morphism";

export const apply =
  <A>(a: A) =>
  <F extends Morphism<A>>(f: F): Target<F> =>
    f(a);

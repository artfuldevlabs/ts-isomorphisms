import { Morphism } from "./morphism";

export const compose =
  <B, C>(f: Morphism<B, C>) =>
  <A>(g: Morphism<A, B>): Morphism<A, C> =>
  (a) =>
    f(g(a));

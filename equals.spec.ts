import fc from "fast-check";
import { Morphism } from "./morphism";
import { Equals } from "./predicate";

export const equals =
  <B>(equals: Equals<B>) =>
  <A>(a: fc.Arbitrary<A>) =>
  (f: Morphism<A, B>) =>
  (g: Morphism<A, B>) =>
    it(`${f.name} = ${g.name}`, () => {
      // To say f = g:
      // for every a, f(a) should equal g(a)
      fc.assert(fc.property(a, (a) => equals(f(a))(g(a))));
    });

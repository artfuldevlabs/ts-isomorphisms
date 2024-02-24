import fc from "fast-check";
import { Identity } from "./identity";
import { compose } from "./compose";
import { Iso } from "./iso";
import { Equals } from "./predicate";
import { equals } from "./equals.spec";
import { named } from "./named";

export type Type<T> = {
  arb: fc.Arbitrary<T>;
  eq: Equals<T>;
  id: Identity<T>;
};

const gof = named("g ∘ f");
const fog = named("f ∘ g");

export const iso =
  <A>(a: Type<A>) =>
  <B>(b: Type<B>) =>
  (iso: Iso<A, B>): void => {
    const [f, g] = iso;

    equals(a.eq)(a.arb)(gof(compose(g)(f)))(a.id);
    equals(b.eq)(b.arb)(fog(compose(f)(g)))(b.id);
  };

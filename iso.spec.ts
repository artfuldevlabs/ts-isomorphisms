import { Fun, compose } from "./function";
import { inverse } from "./inverse";
import { Iso } from "./iso";
import fc from "fast-check";

export type Type<T> = {
  arbitrary: fc.Arbitrary<T>;
  equals: Fun<[T], Fun<[T], boolean>>;
  identity: Fun<[T], T>;
};

const _iso =
  <A>(a: Type<A>) =>
  <B>(b: Type<B>) =>
  (iso: Iso<A, B>): void => {
    const [f, g] = iso;

    it("g.f = id", () => {
      fc.assert(
        fc.property(a.arbitrary, (x) =>
          a.equals(compose(g)(f)(x))(a.identity(x))
        )
      );
    });

    it("f.g = id", () => {
      fc.assert(
        fc.property(b.arbitrary, (x) =>
          b.equals(compose(f)(g)(x))(b.identity(x))
        )
      );
    });
  };

export const iso =
  <A>(a: Type<A>) =>
  <B>(b: Type<B>) =>
  (iso: Iso<A, B>): void => {
    describe("iso", () => {
      _iso(a)(b)(iso);

      describe("inverse", () => {
        _iso(b)(a)(inverse(iso));
      });
    });
  };

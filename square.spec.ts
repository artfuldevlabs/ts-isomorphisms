import fc from "fast-check";
import { identity } from "./identity";
import { Type, iso } from "./iso.spec";
import { equals } from "./predicate";
import { square } from "./square";

describe("square", () => {
  const NaturalNumber: Type<number> = {
    arb: fc.integer({
      min: 1,
      max: Math.floor(Math.sqrt(Number.MAX_SAFE_INTEGER)),
    }),
    eq: equals,
    id: identity,
  };
  const SquareNumber: Type<number> = {
    arb: NaturalNumber.arb.map((x) =>
      Math.pow(x, 2)
    ),
    eq: equals,
    id: identity,
  };

  iso(NaturalNumber)(SquareNumber)(square);
});

import { identity } from "./identity";
import { Type, iso } from "./iso.spec";
import { equals } from "./predicate";
import { successor } from "./successor";
import fc from "fast-check";

describe("successor", () => {
  const WholeNumber: Type<number> = {
    arb: fc.integer({ min: 0 }),
    eq: equals,
    id: identity,
  };
  const NaturalNumber: Type<number> = {
    arb: fc.integer({ min: 1 }),
    eq: equals,
    id: identity,
  };

  iso(WholeNumber)(NaturalNumber)(successor);
});

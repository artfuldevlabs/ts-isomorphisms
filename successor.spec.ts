import { identity } from "./function";
import { Type, iso } from "./iso.spec";
import { equals } from "./predicate";
import { successor } from "./successor";
import fc from "fast-check";

describe("successor", () => {
  const WholeNumber: Type<number> = {
    arbitrary: fc.integer({ min: 0 }),
    equals,
    identity,
  };
  const NaturalNumber: Type<number> = {
    arbitrary: fc.integer({ min: 1 }),
    equals,
    identity,
  };

  iso(WholeNumber)(NaturalNumber)(successor);
});

import fc from "fast-check";
import { identity } from "./identity";
import { Type, iso } from "./iso.spec";
import { equals } from "./predicate";
import { invalid } from "./invalid";

describe("invalid", () => {
  const Integer: Type<number> = {
    arb: fc.integer(),
    eq: equals,
    id: identity,
  };

  iso(Integer)(Integer)(invalid);
});

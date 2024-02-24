import fc from "fast-check";
import { identity } from "./identity";
import { Type, iso } from "./iso.spec";
import { equals } from "./predicate";

describe("identity", () => {
  const Integer: Type<number> = {
    arb: fc.integer(),
    eq: equals,
    id: identity,
  };

  iso(Integer)(Integer)([identity, identity]);
});

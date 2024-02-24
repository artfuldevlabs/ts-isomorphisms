import { identity } from "./identity";
import { Type, iso } from "./iso.spec";
import { equals } from "./predicate";
import { numeric } from "./numeric";
import fc from "fast-check";

describe("numeric", () => {
  const Integer: Type<number> = {
    arb: fc.integer(),
    eq: equals,
    id: identity,
  };
  const String: Type<string> = {
    arb: Integer.arb.map(x => x.toString()),
    eq: equals,
    id: identity,
  };

  iso(Integer)(String)(numeric);
});

import { identity } from "./identity";
import { Type, iso } from "./iso.spec";
import { equals, sequence_equals } from "./predicate";
import { joined } from "./joined";
import { List } from "./types";
import fc from "fast-check";

describe("joined", () => {
  const Integers: Type<List<number>> = {
    arb: fc.array(fc.integer()),
    eq: sequence_equals,
    id: identity,
  };
  const String: Type<string> = {
    arb: Integers.arb.map((x) => x.join(",")),
    eq: equals,
    id: identity,
  };

  iso(Integers)(String)(joined);
});

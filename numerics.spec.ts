import { identity } from "./identity";
import { Type, iso } from "./iso.spec";
import { sequence_equals } from "./predicate";
import { numerics } from "./numerics";
import fc from "fast-check";
import { List } from "./types";

describe("numerics", () => {
  const Integers: Type<List<number>> = {
    arb: fc.array(fc.integer()),
    eq: sequence_equals,
    id: identity,
  };
  const Strings: Type<List<string>> = {
    arb: Integers.arb.map((x) =>
      x.map((z) => z.toString())
    ),
    eq: sequence_equals,
    id: identity,
  };

  iso(Integers)(Strings)(numerics);
});

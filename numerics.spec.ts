import { identity } from "./function";
import { Type, iso } from "./iso.spec";
import { sequence_equals } from "./predicate";
import { numerics } from "./numerics";
import fc from "fast-check";
import { List } from "./types";

describe("numerics", () => {
  const Integers: Type<List<number>> = {
    arbitrary: fc.array(fc.integer()),
    equals: sequence_equals,
    identity,
  };
  const Strings: Type<List<string>> = {
    arbitrary: Integers.arbitrary.map((x) =>
      x.map((z) => z.toString())
    ),
    equals: sequence_equals,
    identity,
  };

  iso(Integers)(Strings)(numerics);
});

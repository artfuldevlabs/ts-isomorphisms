import { identity } from "./function";
import { Type, iso } from "./iso.spec";
import { equals, sequence_equals } from "./predicate";
import { joined } from "./joined";
import { List } from "./types";
import fc from "fast-check";

describe("joined", () => {
  const Integers: Type<List<number>> = {
    arbitrary: fc.array(fc.integer()),
    equals: sequence_equals,
    identity,
  };
  const String: Type<string> = {
    arbitrary: Integers.arbitrary.map((x) => x.join(",")),
    equals,
    identity,
  };

  iso(Integers)(String)(joined);
});

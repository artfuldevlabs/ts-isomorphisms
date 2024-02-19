import { identity } from "./function";
import { Type, iso } from "./iso.spec";
import { equals } from "./predicate";
import { numeric } from "./numeric";
import fc from "fast-check";

describe("numeric", () => {
  const Integer: Type<number> = {
    arbitrary: fc.integer(),
    equals,
    identity,
  };
  const String: Type<string> = {
    arbitrary: Integer.arbitrary.map(x => x.toString()),
    equals,
    identity,
  };

  iso(Integer)(String)(numeric);
});

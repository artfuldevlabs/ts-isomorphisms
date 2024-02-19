import { identity } from "./function";
import { Type, iso } from "./iso.spec";
import { equals } from "./predicate";
import { square } from "./square";
import fc from "fast-check";

describe("square", () => {
  const NaturalNumber: Type<number> = {
    arbitrary: fc.integer({
      min: 1,
      max: Math.floor(Math.sqrt(Number.MAX_SAFE_INTEGER)),
    }),
    equals,
    identity,
  };
  const SquareNumber: Type<number> = {
    arbitrary: NaturalNumber.arbitrary.map((x) =>
      Math.pow(x, 2)
    ),
    equals,
    identity,
  };

  iso(NaturalNumber)(SquareNumber)(square);
});

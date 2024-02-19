import { Iso } from "./iso";

export type NAry<Args extends any[], Result> = (
  ...args: Args
) => Result;

export type NTuple<Args extends any[], Result> = NAry<
  [Args],
  Result
>;

type Split<Args extends any[]> = Args extends []
  ? [[], []]
  : Args extends [any, ...infer Tail]
  ? Args extends [...infer Head, ...Tail]
    ? [Head, Tail]
    : never
  : never;

type Head<Args extends any[]> = Split<Args>[0];

type _ = Head<[addendum: number]>;

type __ = Tail<[addendum: number]>;

type Tail<Args extends any[]> = Split<Args>[1];

export type Curried<Args extends any[], Result> = Args extends []
  ? Result
  : NAry<Head<Args>, Curried<Tail<Args>, Result>>;

const nary_ntuple = <Args extends any[], Result>(): Iso<
  NAry<Args, Result>,
  NTuple<Args, Result>
> => [
  (nary) => (args) => nary(...args),
  (ntuple) =>
    (...args) =>
      ntuple(args),
];

const nary_curried = <Args extends any[], Result>(): Iso<
  NAry<Args, Result>,
  Curried<Args, Result>
> => [
  (nary) => {
    const curry = (nary: NAry<Args, Result>): Curried<Args, Result> =>
      nary.length <= 1
        ? <Curried<Args, Result>>nary
        : (((a: Args[0]) =>
            curry((<Function>nary).bind(nary, a))) as Curried<
            Args,
            Result
          >);
    return curry(nary);
  },
  (curried) =>
    (...args) =>
      args.reduce((f, arg) => f(arg), curried),
];

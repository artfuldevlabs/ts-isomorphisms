export type Fun<Arg, Result> = (arg: Arg) => Result;

export const identity = <A>(a: A): A => a;

export const compose =
  <Intermediate, Result>(f: Fun<Intermediate, Result>) =>
  <Arg>(g: Fun<Arg, Intermediate>): Fun<Arg, Result> =>
  (arg: Arg) =>
    f(g(arg));

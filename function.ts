export type Fun<Args extends [any], Result> = (
  ...args: Args
) => Result;

export const identity = <A>(a: A): A => a;

export const compose =
  <Intermediate, Result>(f: Fun<[Intermediate], Result>) =>
  <Args extends [any]>(
    g: Fun<Args, Intermediate>
  ): Fun<Args, Result> =>
  (...args: Args) =>
    f(g(...args));

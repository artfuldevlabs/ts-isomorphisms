import { Morphism } from "./morphism";

export const named =
  (name: string) =>
  <A, B>(f: Morphism<A, B>): Morphism<A, B> => {
    const fn = (a: A) => f(a);
    Object.defineProperty(fn, "name", {
      value: name,
      configurable: true,
    });
    return fn;
  };

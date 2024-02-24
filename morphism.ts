export type Morphism<S = any, T = any> = (a: S) => T;

export type Source<M extends Morphism> = M extends Morphism<
  infer S,
  any
>
  ? S
  : never;

export type Target<M extends Morphism> = M extends Morphism<
  any,
  infer T
>
  ? T
  : never;

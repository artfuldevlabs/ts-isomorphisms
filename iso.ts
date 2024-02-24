import { Morphism } from "./morphism";

export type Iso<A, B> = [Morphism<A, B>, Morphism<B, A>];

export const ba = <A, B>([_, ba]: Iso<A, B>): Iso<A, B>[1] => ba;

export const ab = <A, B>([ab]: Iso<A, B>): Iso<A, B>[0] => ab;

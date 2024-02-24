import { Morphism } from "./morphism";

export type Identity<A = any> = Morphism<A, A>;

export const identity = <A = any>(a: A): A => a;

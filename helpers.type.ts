export type If<
  Predicate extends boolean,
  True,
  False = never
> = Predicate extends true ? True : False;

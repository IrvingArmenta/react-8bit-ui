declare function typedObjectKeys<O extends Record<string, unknown>>(obj: O): (keyof O)[];
export default typedObjectKeys;

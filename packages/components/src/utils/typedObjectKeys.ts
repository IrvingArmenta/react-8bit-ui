function typedObjectKeys<O extends Record<string, unknown>>(obj: O) {
  const keys = Object.keys(obj);
  return keys as (keyof O)[];
}

export default typedObjectKeys;

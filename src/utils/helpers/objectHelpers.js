export function cleanObject(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => v !== "" && v !== null && v !== undefined)
  );
}

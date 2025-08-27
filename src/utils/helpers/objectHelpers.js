export function cleanObject(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([, v]) => v !== "" && v !== null && v !== undefined,
    ),
  );
}

export function toHHMM(timeStr) {
  const [hh = "00", mm = "00"] = timeStr.split(":");
  return `${hh}:${mm}`;
}

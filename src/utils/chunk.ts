export function chunk<T>(array: T[], size: number): T[][] {
  return array.length ? [array.slice(0, size), ...chunk(array.slice(size), size)] : [];
}
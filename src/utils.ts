// i.e. 0-255 -> '00'-'ff'
function dec2hex(dec: number) {
  return dec.toString(16).padStart(2, "0");
}

export function generateId() {
  const arr = new Uint8Array((20 || 40) / 2);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, dec2hex).join("");
}

export function findItemWithId<T extends { id: string }>(
  array: T[],
  id: string
): [number, T | undefined] {
  const index = array.findIndex((item) => item?.id === id);

  if (index > -1) {
    const item = array[index];
    return [index, item];
  }

  return [index, undefined];
}

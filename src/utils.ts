
export function getRandomElement<T>(arr: T[]): T | never {
  if (arr == null || arr.length === 0) {
    throw new Error('Input must be an array with members');
  };
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

export function kebabise(str: string) {
  return str.replace(/(\s)+/g, '-').toLowerCase();
}

export const toSingular = (word) => {
  if (word.endsWith('es')) {
    return word.substring(0, word.length - 2)
  } else if (word.endsWith('s')) {
    return word.substring(0, word.length - 1)
  }
  return word;
}

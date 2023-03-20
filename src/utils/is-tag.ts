function isTag(word: string): boolean {
  return word.startsWith('#') && word.length > 1;
}

export default isTag;
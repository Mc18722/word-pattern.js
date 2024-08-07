const wordPattern = (pattern, s) => {
  let patterns = pattern.split("");
  let words = s.split(" ");

  if (patterns.length !== words.length) {
    return false;
  }

  const patternToWord = new Map();
  const wordToPattern = new Map();

  for (let i = 0; i < patterns.length; i++) {
    let p = patterns[i];
    let w = words[i];

    if (patternToWord.has(p) && patternToWord.get(p) !== w) {
      return false;
    }
    if (wordToPattern.has(w) && wordToPattern.get(w) !== p) {
      return false;
    }
    patternToWord.set(p, w);
    wordToPattern.set(w, p);
  }
  return true;
}

console.log(wordPattern("abba", "hund katze katze hund"));
console.log(wordPattern("cddc", "rot grün grün rot"));
console.log(wordPattern("abba", "rot grün blau gelb"));
console.log(wordPattern("abcd", "apfel brine brine birne"));
console.log(wordPattern("abba", "hund katze maus hund"));
console.log(wordPattern("aaaa", "hund hund hund hund"));
console.log(wordPattern("abba", "hund hund hund hund"));
console.log(wordPattern("abc", "hund katze maus"));
console.log(wordPattern("aabb", "elefant elefant giraffe giraffe"));
console.log(wordPattern("abcba", "rot grün blau grün rot"));
console.log(wordPattern("abaa", "katze hund katze hund"));

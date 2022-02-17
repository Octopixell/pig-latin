const vowels = ['a', 'e', 'i', 'o', 'u'];

/**
 * Checks if a string is all uppercase
 * @param {String} string 
 * @returns {Boolean}
 */
export function isUpperCase(string) {
  return string === string.toUpperCase();
}

/**
 * Converts the first character of a string to uppercase
 * @param {String} string 
 * @returns {String}
 */
export function ucFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1, string.length);
}

/**
 * Checks if the first character of a string is uppercase
 * @param {String} string 
 * @returns {Boolean}
 */
export function isUcFirst(string) {
  const firstCharacter = string.charAt(0)
  return firstCharacter === firstCharacter.toUpperCase();
}

/**
 * Rule 1
 * For words that begin with a consonant, move all 
 * letters before the first vowel (a, e, i, o, u) 
 * to the end and append “ay” as the suffix.
 * 
 * @param {String} word 
 * @returns {String} word
 */
export const processRule1 = (word) => {
  const suffix = 'ay';
  const firstVowelIndex = word.search(/[aeiou]/i);
  const wordIsAllCaps = isUpperCase(word);
  const wordIsUcFirst = isUcFirst(word);
  const firstPart = word.slice(firstVowelIndex, word.length);
  const secondPart = word.slice(0, firstVowelIndex);

  let result = `${wordIsUcFirst ? ucFirst(firstPart) : firstPart }${secondPart.toLocaleLowerCase()}${suffix}`;

  return wordIsAllCaps ? result.toUpperCase() : result;
}

/**
 * Rule 2
 * For words that begin with a vowel, leave the vowel 
 * in place and append “yay” as the suffix. 
 * 
 * @param {String} word 
 * @returns {String} word
 */
export const processRule2 = (word) => {
  const suffix = 'yay';
  return `${word}${isUpperCase(word.charAt(0)) && word.length > 1 ? suffix.toUpperCase() : suffix}`;  
}

/**
 * Process a word using predefined rules
 * @param {String} word 
 * @returns 
 */
export const processWord = (word) => {
  if (vowels.includes(word.charAt(0).toLowerCase())) {
    return processRule2(word);
  } else {
    return processRule1(word);
  }
}

/**
 * Process a collection of sentences
 * @param {Array<String>} sentences 
 * @returns 
 */
export const processSentences = (sentences) => sentences
  .map(sentence => sentence.split(' ')
  .map(word => processWord(word))
  .join(' '));
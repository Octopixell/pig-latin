# Pig Latin

[![codecov](https://codecov.io/gh/Octopixell/pig-latin/branch/master/graph/badge.svg?token=KM5DKPNZEE)](https://codecov.io/gh/Octopixell/pig-latin)


[Pig Latin (Wikipedia)](https://en.wikipedia.org/wiki/Pig_Latin) is a language game played by children that alters words by rearranging them into a coded language.

## The rules of the game are as follows:

### Rule 1

For words that begin with a consonant, move all letters before the first vowel (`a`, `e`, `i`, `o`, `u`)  to the end and append `ay` as the suffix. 

Examples:
* "pig" = "igpay"
* "latin" = "atinlay"
* "smile" = "ilesmay"
* "floor"= "oorflay"
* "string" = "ingstray"


### Rule 2

For words that begin with a vowel, leave the vowel in place and append `yay` as the suffix. 

Examples:
* "egg" = "eggyay"
* "explain" = "explainyay"
* "I"= "Iyay"


### Examples

```
`Do you speak Pig Latin`

Becomes

`Oday ouyay eakspay Igpay Atinlay`
```

```
`A tree whose elements have at most two children is called a BINARY TREE`  

Becomes

`Ayay eetray osewhay elementsyay avehay atyay ostmay otway ildrenchay isyay alledcay ayay INARYBAY EETRAY`  
```

### How to use it?

Simply import `processSentences()` from `index.js` and feed it your sentences like so:

```js
import { processSentences } from './index';

const sentences = [
  'Do you speak Pig Latin',
  'A tree whose elements have at most two children is called a BINARY TREE'
];

const pigLatinSentences = processSentences(sentences);

// [
//   'Oday ouyay eakspay Igpay Atinlay',
//   'Ayay eetray osewhay elementsyay avehay atyay ostmay otway ildrenchay isyay alledcay ayay INARYBAY EETRAY',
// ]

```

Want to only convert specific words? 

```js
import { processWord } from './index';

const egg = processWord('egg'); // eggyay
const pig = processWord('pig'); // igpay
```
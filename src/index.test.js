import { describe, expect } from "@jest/globals";
import { isUcFirst, isUpperCase, processRule1, processRule2, processSentences, ucFirst } from './index';

const sentences = [
  [
    'Pleased to meet you',
    'Easedplay otay eetmay ouyay',
  ],
  [
    'Do you speak Pig Latin',
    'Oday ouyay eakspay Igpay Atinlay',
  ],
  [
    'Time flies when you are having fun',
    'Imetay iesflay enwhay ouyay areyay avinghay unfay',
  ],
  [
    'A tree whose elements have at most two children is called a BINARY TREE',
    'Ayay eetray osewhay elementsyay avehay atyay ostmay otway ildrenchay isyay alledcay ayay INARYBAY EETRAY',
  ]
]

describe('isUpperCase', () => {
  it('should return `true` if the provided string is all uppercase', () => {
    const result = isUpperCase('UPPERCASE');

    expect(result).toEqual(true);
  })
  it('should return `false` if the provided string is mixed case', () => {
    const result = isUpperCase('NotAllUppercase');

    expect(result).toEqual(false);
  })
})

describe('ucFirst', () => {
  it('should convert the first character of a string to uppercase', () => {
    const result = ucFirst('latin');

    expect(result).toEqual('Latin');
  })
})

describe('isUcFirst', () => {
  it('should return `true` if the first character of a sting is uppercase', () => {
    const result = isUcFirst('Latin');

    expect(result).toEqual(true);
  })
  it('should return `false` if the first character of a string is lowercase', () => {
    const result = isUcFirst('latin');

    expect(result).toEqual(false);
  })
})

describe('processRule1', () => {
  describe('should convert words according to rule 1', () => {
    it('should convert `pig` to `igpay`', () => {
      const result = processRule1('pig');

      expect(result).toEqual('igpay');
    })
    it('should convert `latin` to `atinlay`', () => {
      const result = processRule1('latin');

      expect(result).toEqual('atinlay');
    })
    it('should convert `smile` to `ilesmay`', () => {
      const result = processRule1('smile');

      expect(result).toEqual('ilesmay');
    })
    it('should convert `floor` to `oorflay`', () => {
      const result = processRule1('floor');

      expect(result).toEqual('oorflay');
    })
    it('should convert `string` to `ingstray`', () => {
      const result = processRule1('string');

      expect(result).toEqual('ingstray');
    })
  })
})

describe('processRule2', () => {
  describe('should process words according to rule 2', () => {
    it('should convert `egg` to `eggyay`', () => {
      const result = processRule2('egg');

      expect(result).toEqual('eggyay');
    })
    it('should convert `explain` to `explainyay`', () => {
      const result = processRule2('egg');

      expect(result).toEqual('eggyay');
    })
    it('should convert `I` to `Iyay`', () => {
      const result = processRule2('I');

      expect(result).toEqual('Iyay');
    })
    it('should convert `IPAD` to `IPADYAY`', () => {
      const result = processRule2('IPAD');

      expect(result).toEqual('IPADYAY');
    })
  })
})

describe('processWord', () => {
  describe('should process words according to rule 1 and 2', () => {
    it('should convert `pig` to `igpay`', () => {
      const result = processRule1('pig');

      expect(result).toEqual('igpay');
    })
    it('should convert `egg` to `eggyay`', () => {
      const result = processRule2('egg');

      expect(result).toEqual('eggyay');
    })
  })
})

describe('processWord', () => {
  describe('should process sentences according to rule 1 and 2', () => {
    it(`should convert "${sentences[0][0]}" to "${sentences[0][1]}"`, () => {
      const result = processSentences([sentences[0][0]]);

      expect(result[0]).toEqual(sentences[0][1]);
    })
    it(`should convert "${sentences[1][0]}" to "${sentences[1][1]}"`, () => {
      const result = processSentences([sentences[1][0]]);

      expect(result[0]).toEqual(sentences[1][1]);
    })
    it(`should convert "${sentences[2][0]}" to "${sentences[2][1]}"`, () => {
      const result = processSentences([sentences[2][0]]);

      expect(result[0]).toEqual(sentences[2][1]);
    })
    it(`should convert "${sentences[3][0]}" to "${sentences[3][1]}"`, () => {
      const result = processSentences([sentences[3][0]]);

      expect(result[0]).toEqual(sentences[3][1]);
    })
  })
})


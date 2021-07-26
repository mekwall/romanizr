# romanizr

[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/mekwall/romanizr/blob/main/LICENSE) [![npm](https://img.shields.io/npm/v/romanizr.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/romanizr) [![dependencies](https://img.shields.io/librariesio/github/mekwall/romanizr.svg?style=flat-square)](https://github.com/mekwall/romanizr) ![types](https://img.shields.io/npm/types/romanizr.svg?style=flat-square&logo=typescript) [![coverage](https://img.shields.io/codecov/c/github/mekwall/romanizr?style=flat-square)](https://codecov.io/github/mekwall/romanizr?branch=main) [![quality](https://img.shields.io/lgtm/grade/javascript/github/mekwall/romanizr?style=flat-square)](https://lgtm.com/projects/g/mekwall/romanizr/?mode=list)

Romanize decimals. Deromanize Roman numerals.

This is a hybrid package that provides both CommonJS and ES modules with zero dependencies.

The regular expression used to match Roman numerals is a modified version of [Reilly's Modern roman numerals strict expression][1]. I wrote an [answer on StackOverflow][3] related to this.

> NOTE: This library only support the [Roman numeral standard form][2]. That means that the largest number that can be represented is 3,999 (MMMCMXCIX). There are variant forms out there that allow for higher numbers but I don't think there's a need to implement any of them.

## Installation

```sh
$ npm install --save romanize
$ yarn add romanize
```

## Usage

### Deromanize a Roman numeral

```js
import { deromanize } from "romanizr";

const decimal = deromanize("MDCCLXXVI");
// decimal = 1776
```

### Romanize a decimal

```js
import { romanize } from "romanizr";

const romans = romanize(1776);
// romans = "MDCCLXXVI"
```

### Deromanize Roman numerals in text

```js
import { deromanizeText } from "romanizr";

const result = decimalizeText("In Year MMXII We Will All Die");
// result = "In Year 2012 We Will All Die"
```

### Romanize decimals in text

```js
import { romanizeText } from "romanizr";

const result = romanizeText("In Year 2012 We Will All Die");
// result = "In Year MMXII We Will All Die"
```

### Matching Roman numerals within a string

```js
import { matchRomans } from "romanizr";

const matches = matchRomans("Match Roman numerals MMXII in this string");
// matches[0][0] = "MMXII"
```

## License

[MIT](./LICENSE)

[1]: https://www.oreilly.com/library/view/regular-expressions-cookbook/9780596802837/ch06s09.html
[2]: https://en.wikipedia.org/wiki/Roman_numerals#Standard_form
[3]: https://stackoverflow.com/questions/267399/how-do-you-match-only-valid-roman-numerals-with-a-regular-expression/68450933#68450933

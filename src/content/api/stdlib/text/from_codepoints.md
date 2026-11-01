---
slug: "stdlib/text/from_codepoints"
package: "stdlib"
title: "from_codepoints"
description: "Returns the string whose characters are the code points cps."
module: "text"
kind: "fn"
name: "from_codepoints"
signature: "fn from_codepoints(Vec<int> cps) -> string"
import: "use text::{from_codepoints};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/text.coil#L209"
order: 5
---

Returns the string whose characters are the code points `cps`.

A value that is not a Unicode scalar (negative, a surrogate
`0xD800..=0xDFFF`, or above `0x10FFFF`) becomes `U+FFFD`.

## Parameters

| Name | Type |
|------|------|
| `cps` | `Vec<int>` |

## Returns

`string`

## Examples

```coil
use text::{Text, from_codepoints};
use tests::assert;
let cps: Vec<int> = [104, 233];
assert!(from_codepoints(cps) == "h\u{e9}");
assert!(from_codepoints("\u{416}".codepoints()) == "\u{416}");
```

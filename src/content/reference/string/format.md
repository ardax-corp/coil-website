---
slug: "string/format"
title: "format"
description: "Builds a string from the literal fmt and the arguments that follow it."
module: "string"
kind: "fn"
name: "format"
signature: "fn format(string fmt) -> string"
import: "use string::{format};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/string.hy#L40"
order: 1
---

Builds a string from the literal `fmt` and the arguments that follow it.

`format` takes any number of arguments after `fmt`; each `%` specifier
in `fmt` consumes the next one:

- `%i`: an [`int`](/docs/reference/types/int) (or [`byte`](/docs/reference/types/byte)) in decimal.
- `%f`: a [`float`](/docs/reference/types/float) (`1.5`, `2.0`).
- `%s`: a [`string`](/docs/reference/types/string).
- `%z`: a [`bool`](/docs/reference/types/bool) (`true` / `false`).
- `%v`: any value with a [`Show`](/docs/reference/prelude/ops/Show) instance (enums, tuples, records, ...).
- `%x`, `%b`, `%u`: an [`int`](/docs/reference/types/int) in hex, binary, or unsigned decimal.
- `%%`: a literal `%`.

`fmt` must be a string literal: the compiler checks every specifier
against its argument's type, and reports too many or too few arguments.
`format` is built into the compiler, not a library function.

## Parameters

| Name | Type |
|------|------|
| `fmt` | `string` |

## Returns

`string`

## Examples

```coil
use string::{format};
use tests::assert;
assert!(format("%i-%s", 42, "x") == "42-x");
assert!(format("%f %z", 1.5, true) == "1.5 true");
assert!(format("%x %b %%", 255, 5) == "ff 101 %");
assert!(format("%v", (1, "a")) == "(1, a)");
```

## See also

- [`int`](/docs/reference/types/int)
- [`byte`](/docs/reference/types/byte)
- [`float`](/docs/reference/types/float)
- [`string`](/docs/reference/types/string)
- [`bool`](/docs/reference/types/bool)
- [`Show`](/docs/reference/prelude/ops/Show)
- [`from_bytes`](/docs/reference/string/from_bytes): Decodes `bytes` as UTF-8 text.
- [`slice_bytes`](/docs/reference/string/slice_bytes): Returns the part of `s` between byte offsets `start` (inclusive) and `end` (exclusive).

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
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/string.hy#L63"
order: 2
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
- [`byte_at`](/docs/reference/string/byte_at): Returns the byte at byte offset `i` of `s`, or `-1` when `i` is out of range.
- [`find_from`](/docs/reference/string/find_from): Returns the byte offset of the first `needle` in `hay` at or after `start`, or `-1`.

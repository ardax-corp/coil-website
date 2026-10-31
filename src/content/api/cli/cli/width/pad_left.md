---
slug: "cli/cli/width/pad_left"
package: "cli"
title: "pad_left"
description: "Pad with spaces on the left to cols columns (cut if longer), for right-aligned columns."
module: "cli::width"
kind: "fn"
name: "pad_left"
signature: "fn pad_left(string s, int cols) -> string"
import: "use cli::width::{pad_left};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/width.hy#L724"
order: 10
---

Pad with spaces on the left to `cols` columns (cut if longer), for right-aligned columns.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |
| `cols` | `int` |

## Returns

`string`

## Examples

```coil
use cli::width::{pad_left, pad_right};
use tests::assert;
assert!(pad_left("42", 5) == "   42");
assert!(pad_right("42", 5) == "42   ");
assert!(pad_left("toolong", 4) == "tool");
```

## See also

- [`seq_len`](/packages/cli/reference/cli/width/seq_len): Byte length of the UTF-8 sequence starting with `lead`.
- [`decode_at`](/packages/cli/reference/cli/width/decode_at): Code point of the sequence at `i` (`b` is valid UTF-8).
- [`code_points`](/packages/cli/reference/cli/width/code_points): Code points of `s`.
- [`char_width`](/packages/cli/reference/cli/width/char_width): Columns one code point takes: 0, 1 or 2.
- [`width`](/packages/cli/reference/cli/width/width): Display width of plain text (no escape sequences), in terminal columns.
- [`visible_width`](/packages/cli/reference/cli/width/visible_width): Width of text that may hold escape sequences (styled output).
- [`byte_index_at`](/packages/cli/reference/cli/width/byte_index_at): Byte offset where the first `cols` columns of `s` end (never splits a wide character).
- [`take`](/packages/cli/reference/cli/width/take): The first `cols` columns of `s`.

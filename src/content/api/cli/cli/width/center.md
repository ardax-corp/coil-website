---
slug: "cli/cli/width/center"
package: "cli"
title: "center"
description: "Center s in cols columns with spaces; an odd leftover space goes on the right. Text as wide as cols or wider is cut like pad_right."
module: "cli::width"
kind: "fn"
name: "center"
signature: "fn center(string s, int cols) -> string"
import: "use cli::width::{center};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/width.hy#L743"
order: 11
---

Center `s` in `cols` columns with spaces; an odd leftover space goes on the right. Text as wide as `cols` or wider is cut like [`pad_right`](/packages/cli/reference/cli/width/pad_right).

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |
| `cols` | `int` |

## Returns

`string`

## Examples

```coil
use cli::width::center;
use tests::assert;
assert!(center("ab", 5) == " ab  ");
```

## See also

- [`cli::width::pad_right`](/packages/cli/reference/cli/width/pad_right)
- [`seq_len`](/packages/cli/reference/cli/width/seq_len): Byte length of the UTF-8 sequence starting with `lead`.
- [`decode_at`](/packages/cli/reference/cli/width/decode_at): Code point of the sequence at `i` (`b` is valid UTF-8).
- [`code_points`](/packages/cli/reference/cli/width/code_points): Code points of `s`.
- [`char_width`](/packages/cli/reference/cli/width/char_width): Columns one code point takes: 0, 1 or 2.
- [`width`](/packages/cli/reference/cli/width/width): Display width of plain text (no escape sequences), in terminal columns.
- [`visible_width`](/packages/cli/reference/cli/width/visible_width): Width of text that may hold escape sequences (styled output).
- [`byte_index_at`](/packages/cli/reference/cli/width/byte_index_at): Byte offset where the first `cols` columns of `s` end (never splits a wide character).

---
slug: "cli/cli/width/width"
package: "cli"
title: "width"
description: "Display width of plain text (no escape sequences), in terminal columns."
module: "cli::width"
kind: "fn"
name: "width"
signature: "fn width(string s) -> int"
import: "use cli::width::{width};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/width.coil#L601"
order: 4
---

Display width of plain text (no escape sequences), in terminal columns.

Wide characters (CJK, emoji) count 2, combining marks and other
zero-width characters 0, control characters 0. A code point after a
zero-width joiner joins the glyph before it and adds nothing.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`int`

## Examples

```coil
use cli::width::width;
use tests::assert;
assert!(width("hello") == 5);
assert!(width("日本") == 4);
assert!(width("e\u{301}") == 1);
```

## See also

- [`seq_len`](/packages/cli/reference/cli/width/seq_len): Byte length of the UTF-8 sequence starting with `lead`.
- [`decode_at`](/packages/cli/reference/cli/width/decode_at): Code point of the sequence at `i` (`b` is valid UTF-8).
- [`code_points`](/packages/cli/reference/cli/width/code_points): Code points of `s`.
- [`char_width`](/packages/cli/reference/cli/width/char_width): Columns one code point takes: 0, 1 or 2.
- [`visible_width`](/packages/cli/reference/cli/width/visible_width): Width of text that may hold escape sequences (styled output).
- [`byte_index_at`](/packages/cli/reference/cli/width/byte_index_at): Byte offset where the first `cols` columns of `s` end (never splits a wide character).
- [`take`](/packages/cli/reference/cli/width/take): The first `cols` columns of `s`.
- [`truncate`](/packages/cli/reference/cli/width/truncate): `s` cut to `cols` columns, ending in `ellipsis` when it was cut.

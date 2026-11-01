---
slug: "cli/cli/width/decode_at"
package: "cli"
title: "decode_at"
description: "Code point of the sequence at i (b is valid UTF-8)."
module: "cli::width"
kind: "fn"
name: "decode_at"
signature: "fn decode_at(Vec<byte> b, int i) -> int"
import: "use cli::width::{decode_at};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/width.coil#L26"
order: 1
---

Code point of the sequence at `i` (`b` is valid UTF-8).

## Parameters

| Name | Type |
|------|------|
| `b` | `Vec<byte>` |
| `i` | `int` |

## Returns

`int`

## See also

- [`seq_len`](/packages/cli/reference/cli/width/seq_len): Byte length of the UTF-8 sequence starting with `lead`.
- [`code_points`](/packages/cli/reference/cli/width/code_points): Code points of `s`.
- [`char_width`](/packages/cli/reference/cli/width/char_width): Columns one code point takes: 0, 1 or 2.
- [`width`](/packages/cli/reference/cli/width/width): Display width of plain text (no escape sequences), in terminal columns.
- [`visible_width`](/packages/cli/reference/cli/width/visible_width): Width of text that may hold escape sequences (styled output).
- [`byte_index_at`](/packages/cli/reference/cli/width/byte_index_at): Byte offset where the first `cols` columns of `s` end (never splits a wide character).
- [`take`](/packages/cli/reference/cli/width/take): The first `cols` columns of `s`.
- [`truncate`](/packages/cli/reference/cli/width/truncate): `s` cut to `cols` columns, ending in `ellipsis` when it was cut.

---
slug: "cli/cli/width/char_width"
package: "cli"
title: "char_width"
description: "Columns one code point takes: 0, 1 or 2. Control characters count 0."
module: "cli::width"
kind: "fn"
name: "char_width"
signature: "fn char_width(int cp) -> int"
import: "use cli::width::{char_width};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/width.hy#L567"
order: 3
---

Columns one code point takes: 0, 1 or 2. Control characters count 0.

## Parameters

| Name | Type |
|------|------|
| `cp` | `int` |

## Returns

`int`

## See also

- [`seq_len`](/packages/cli/reference/cli/width/seq_len): Byte length of the UTF-8 sequence starting with `lead`.
- [`decode_at`](/packages/cli/reference/cli/width/decode_at): Code point of the sequence at `i` (`b` is valid UTF-8).
- [`code_points`](/packages/cli/reference/cli/width/code_points): Code points of `s`.
- [`width`](/packages/cli/reference/cli/width/width): Display width of plain text (no escape sequences).
- [`visible_width`](/packages/cli/reference/cli/width/visible_width): Width of text that may hold escape sequences (styled output).
- [`byte_index_at`](/packages/cli/reference/cli/width/byte_index_at): Byte offset where the first `cols` columns of `s` end (never splits a wide character).
- [`take`](/packages/cli/reference/cli/width/take): The first `cols` columns of `s`.
- [`truncate`](/packages/cli/reference/cli/width/truncate): `s` cut to `cols` columns, ending in `ellipsis` when it was cut.

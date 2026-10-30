---
slug: "cli/cli/width/seq_len"
package: "cli"
title: "seq_len"
description: "Byte length of the UTF-8 sequence starting with lead."
module: "cli::width"
kind: "fn"
name: "seq_len"
signature: "fn seq_len(int lead) -> int"
import: "use cli::width::{seq_len};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/width.hy#L9"
order: 0
---

Byte length of the UTF-8 sequence starting with `lead`.

## Parameters

| Name | Type |
|------|------|
| `lead` | `int` |

## Returns

`int`

## See also

- [`decode_at`](/packages/cli/reference/cli/width/decode_at): Code point of the sequence at `i` (`b` is valid UTF-8).
- [`code_points`](/packages/cli/reference/cli/width/code_points): Code points of `s`.
- [`char_width`](/packages/cli/reference/cli/width/char_width): Columns one code point takes: 0, 1 or 2.
- [`width`](/packages/cli/reference/cli/width/width): Display width of plain text (no escape sequences).
- [`visible_width`](/packages/cli/reference/cli/width/visible_width): Width of text that may hold escape sequences (styled output).
- [`byte_index_at`](/packages/cli/reference/cli/width/byte_index_at): Byte offset where the first `cols` columns of `s` end (never splits a wide character).
- [`take`](/packages/cli/reference/cli/width/take): The first `cols` columns of `s`.
- [`truncate`](/packages/cli/reference/cli/width/truncate): `s` cut to `cols` columns, ending in `ellipsis` when it was cut.

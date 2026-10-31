---
slug: "cli/cli/width/take"
package: "cli"
title: "take"
description: "The first cols columns of s."
module: "cli::width"
kind: "fn"
name: "take"
signature: "fn take(string s, int cols) -> string"
import: "use cli::width::{take};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/width.hy#L662"
order: 7
---

The first `cols` columns of `s`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |
| `cols` | `int` |

## Returns

`string`

## See also

- [`seq_len`](/packages/cli/reference/cli/width/seq_len): Byte length of the UTF-8 sequence starting with `lead`.
- [`decode_at`](/packages/cli/reference/cli/width/decode_at): Code point of the sequence at `i` (`b` is valid UTF-8).
- [`code_points`](/packages/cli/reference/cli/width/code_points): Code points of `s`.
- [`char_width`](/packages/cli/reference/cli/width/char_width): Columns one code point takes: 0, 1 or 2.
- [`width`](/packages/cli/reference/cli/width/width): Display width of plain text (no escape sequences), in terminal columns.
- [`visible_width`](/packages/cli/reference/cli/width/visible_width): Width of text that may hold escape sequences (styled output).
- [`byte_index_at`](/packages/cli/reference/cli/width/byte_index_at): Byte offset where the first `cols` columns of `s` end (never splits a wide character).
- [`truncate`](/packages/cli/reference/cli/width/truncate): `s` cut to `cols` columns, ending in `ellipsis` when it was cut.

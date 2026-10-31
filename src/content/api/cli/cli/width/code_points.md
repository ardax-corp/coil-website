---
slug: "cli/cli/width/code_points"
package: "cli"
title: "code_points"
description: "Code points of s."
module: "cli::width"
kind: "fn"
name: "code_points"
signature: "fn code_points(string s) -> Vec<int>"
import: "use cli::width::{code_points};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/width.hy#L49"
order: 2
---

Code points of `s`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Vec<int>`

## See also

- [`seq_len`](/packages/cli/reference/cli/width/seq_len): Byte length of the UTF-8 sequence starting with `lead`.
- [`decode_at`](/packages/cli/reference/cli/width/decode_at): Code point of the sequence at `i` (`b` is valid UTF-8).
- [`char_width`](/packages/cli/reference/cli/width/char_width): Columns one code point takes: 0, 1 or 2.
- [`width`](/packages/cli/reference/cli/width/width): Display width of plain text (no escape sequences), in terminal columns.
- [`visible_width`](/packages/cli/reference/cli/width/visible_width): Width of text that may hold escape sequences (styled output).
- [`byte_index_at`](/packages/cli/reference/cli/width/byte_index_at): Byte offset where the first `cols` columns of `s` end (never splits a wide character).
- [`take`](/packages/cli/reference/cli/width/take): The first `cols` columns of `s`.
- [`truncate`](/packages/cli/reference/cli/width/truncate): `s` cut to `cols` columns, ending in `ellipsis` when it was cut.

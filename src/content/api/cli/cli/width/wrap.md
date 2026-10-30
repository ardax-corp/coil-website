---
slug: "cli/cli/width/wrap"
package: "cli"
title: "wrap"
description: "Word-wrap s to lines of at most cols columns. Existing newlines are kept; a word longer than a line is split."
module: "cli::width"
kind: "fn"
name: "wrap"
signature: "fn wrap(string s, int cols) -> Vec<string>"
import: "use cli::width::{wrap};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/width.hy#L707"
order: 10
---

Word-wrap `s` to lines of at most `cols` columns. Existing newlines are kept; a word longer than a line is split.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |
| `cols` | `int` |

## Returns

`Vec<string>`

## See also

- [`seq_len`](/packages/cli/reference/cli/width/seq_len): Byte length of the UTF-8 sequence starting with `lead`.
- [`decode_at`](/packages/cli/reference/cli/width/decode_at): Code point of the sequence at `i` (`b` is valid UTF-8).
- [`code_points`](/packages/cli/reference/cli/width/code_points): Code points of `s`.
- [`char_width`](/packages/cli/reference/cli/width/char_width): Columns one code point takes: 0, 1 or 2.
- [`width`](/packages/cli/reference/cli/width/width): Display width of plain text (no escape sequences).
- [`visible_width`](/packages/cli/reference/cli/width/visible_width): Width of text that may hold escape sequences (styled output).
- [`byte_index_at`](/packages/cli/reference/cli/width/byte_index_at): Byte offset where the first `cols` columns of `s` end (never splits a wide character).
- [`take`](/packages/cli/reference/cli/width/take): The first `cols` columns of `s`.

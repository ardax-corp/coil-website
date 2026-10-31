---
slug: "cli/cli/width/truncate"
package: "cli"
title: "truncate"
description: "s cut to cols columns, ending in ellipsis when it was cut. Text that fits is returned unchanged; an ellipsis wider than cols is itself cut."
module: "cli::width"
kind: "fn"
name: "truncate"
signature: "fn truncate(string s, int cols, string ellipsis) -> string"
import: "use cli::width::{truncate};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/width.hy#L681"
order: 8
---

`s` cut to `cols` columns, ending in `ellipsis` when it was cut. Text that fits is returned unchanged; an `ellipsis` wider than `cols` is itself cut.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |
| `cols` | `int` |
| `ellipsis` | `string` |

## Returns

`string`

## Examples

```coil
use cli::width::truncate;
use tests::assert;
assert!(truncate("something went wrong", 12, "…") == "something w…");
assert!(truncate("short", 12, "…") == "short");
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

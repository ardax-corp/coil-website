---
slug: "cli/cli/width/index"
package: "cli"
title: "cli::width"
description: "Display width of text in terminal columns, and truncating or padding to a width."
module: "cli::width"
kind: "module"
name: "cli::width"
origin: "package"
auto: false
order: 11
---

Part of the [cli](/packages/cli) package ([coil-cli](https://github.com/ardax-corp/coil-cli)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/cli)).

Import what you use (`use path::*` is not allowed):

```coil
use cli::width::{seq_len, decode_at};
```

## Functions

| Name | Description |
|------|-------------|
| [`seq_len`](/packages/cli/reference/cli/width/seq_len) | Byte length of the UTF-8 sequence starting with `lead`. |
| [`decode_at`](/packages/cli/reference/cli/width/decode_at) | Code point of the sequence at `i` (`b` is valid UTF-8). |
| [`code_points`](/packages/cli/reference/cli/width/code_points) | Code points of `s`. |
| [`char_width`](/packages/cli/reference/cli/width/char_width) | Columns one code point takes: 0, 1 or 2. |
| [`width`](/packages/cli/reference/cli/width/width) | Display width of plain text (no escape sequences), in terminal columns. |
| [`visible_width`](/packages/cli/reference/cli/width/visible_width) | Width of text that may hold escape sequences (styled output). |
| [`byte_index_at`](/packages/cli/reference/cli/width/byte_index_at) | Byte offset where the first `cols` columns of `s` end (never splits a wide character). |
| [`take`](/packages/cli/reference/cli/width/take) | The first `cols` columns of `s`. |
| [`truncate`](/packages/cli/reference/cli/width/truncate) | `s` cut to `cols` columns, ending in `ellipsis` when it was cut. |
| [`pad_right`](/packages/cli/reference/cli/width/pad_right) | Pad with spaces on the right to `cols` columns (cut if longer). |
| [`pad_left`](/packages/cli/reference/cli/width/pad_left) | Pad with spaces on the left to `cols` columns (cut if longer), for right-aligned columns. |
| [`center`](/packages/cli/reference/cli/width/center) | Center `s` in `cols` columns with spaces; an odd leftover space goes on the right. |
| [`wrap`](/packages/cli/reference/cli/width/wrap) | Word-wrap `s` to lines of at most `cols` columns. |

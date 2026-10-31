---
slug: "log/log/format_line"
package: "log"
title: "format_line"
description: "The line a Logger writes for an event: <secs> <TAG> <msg> and a newline."
module: "log"
kind: "fn"
name: "format_line"
signature: "fn format_line(Level level, string msg) -> string"
import: "use log::{format_line};"
origin: "package"
source: "https://github.com/ardax-corp/coil-log/blob/17dadae959e85e1d3bf7d7b1904b7e67f50ba247/src/log.hy#L105"
order: 3
---

The line a [`Logger`](/packages/log/reference/log/Logger) writes for an event: `<secs> <TAG> <msg>` and a newline.

`secs` is the current Unix time in whole seconds ([`time::timestamp`](/packages/time/reference/time/fn.timestamp)); when
the clock cannot be read the prefix is left out and the line starts with
the tag. Every `\n` and `\r` in `msg` becomes a space, so one event is
always exactly one line.

## Parameters

| Name | Type |
|------|------|
| `level` | `Level` |
| `msg` | `string` |

## Returns

`string`

## Examples

```coil
use log::{format_line, Level};
use text::{Searchable};
use tests::assert;
let line = format_line(Level::Info, "listening\non :8080");
assert!(line.ends_with(" INFO listening on :8080\n"));
```

## See also

- [`log::Logger`](/packages/log/reference/log/Logger)
- [`time::timestamp`](/packages/time/reference/time/fn.timestamp)
- [`level_tag`](/packages/log/reference/log/level_tag): The tag written for `level` in a log line: `DEBUG`, `INFO`, `WARN` or `ERROR`.

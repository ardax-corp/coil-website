---
slug: "log/log/level_tag"
package: "log"
title: "level_tag"
description: "The tag written for level in a log line: DEBUG, INFO, WARN or ERROR."
module: "log"
kind: "fn"
name: "level_tag"
signature: "fn level_tag(Level level) -> string"
import: "use log::{level_tag};"
origin: "package"
source: "https://github.com/ardax-corp/coil-log/blob/17dadae959e85e1d3bf7d7b1904b7e67f50ba247/src/log.hy#L49"
order: 2
---

The tag written for `level` in a log line: `DEBUG`, `INFO`, `WARN` or `ERROR`.

Use this, not [`Show`](/docs/reference/prelude/ops/Show), to print a level: [`Level`](/packages/log/reference/log/Level) is a `repr(int)` enum, so
[`Show`](/docs/reference/prelude/ops/Show) prints its backing int.

## Parameters

| Name | Type |
|------|------|
| `level` | `Level` |

## Returns

`string`

## Examples

```coil
use log::{level_tag, Level};
use tests::assert;
assert!(level_tag(Level::Warn) == "WARN");
assert!(level_tag(Level::Debug) == "DEBUG");
```

## See also

- [`Show`](/docs/reference/prelude/ops/Show)
- [`log::Level`](/packages/log/reference/log/Level)
- [`format_line`](/packages/log/reference/log/format_line): The line a `Logger` writes for an event: `<secs> <TAG> <msg>` and a newline.

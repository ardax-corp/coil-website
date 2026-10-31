---
slug: "log/log/index"
package: "log"
title: "log"
description: "A leveled logger that writes one timestamped line per event to stderr or any stream."
module: "log"
kind: "module"
name: "log"
origin: "package"
auto: false
order: 0
---

Part of the [log](/packages/log) package ([coil-log](https://github.com/ardax-corp/coil-log)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/log)).

Import what you use (`use path::*` is not allowed):

```coil
use log::{Level, Logger};
```

## Types

| Name | Description |
|------|-------------|
| [`Level`](/packages/log/reference/log/Level) | Severity of a log event, from `Debug` (least severe) to `Error` (most severe). |
| [`Logger`](/packages/log/reference/log/Logger) | A logger that writes events at or above a minimum [`Level`](/packages/log/reference/log/Level) to a stream. |

## Functions

| Name | Description |
|------|-------------|
| [`level_tag`](/packages/log/reference/log/level_tag) | The tag written for `level` in a log line: `DEBUG`, `INFO`, `WARN` or `ERROR`. |
| [`format_line`](/packages/log/reference/log/format_line) | The line a [`Logger`](/packages/log/reference/log/Logger) writes for an event: `<secs> <TAG> <msg>` and a newline. |

---
slug: "log/log/Logger"
package: "log"
title: "Logger"
description: "A logger that writes events at or above a minimum Level to a stream."
module: "log"
kind: "class"
name: "Logger"
signature: "class Logger"
import: "use log::{Logger};"
origin: "package"
source: "https://github.com/ardax-corp/coil-log/blob/17dadae959e85e1d3bf7d7b1904b7e67f50ba247/src/log.hy#L130"
order: 1
---

A logger that writes events at or above a minimum [`Level`](/packages/log/reference/log/Level) to a stream.

Each kept event is one line in the [`format_line`](/packages/log/reference/log/format_line) layout. Events below the
minimum are dropped without formatting. Logging never fails or panics: a
write error drops that line.

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/log/reference/log/Logger/new) | A logger writing events at or above `min` to stderr. |
| [`to`](/packages/log/reference/log/Logger/to) | A logger writing events at or above `min` to `out`, such as a file opened for writing. |

## Methods

| Name | Description |
|------|-------------|
| [`log`](/packages/log/reference/log/Logger/log) | Write `msg` at `level`, or do nothing when `level` is below the minimum. |
| [`error`](/packages/log/reference/log/Logger/error) | Write `msg` at [`Level::Error`](/packages/log/reference/log/Level#variant-error). |
| [`warn`](/packages/log/reference/log/Logger/warn) | Write `msg` at [`Level::Warn`](/packages/log/reference/log/Level#variant-warn). |
| [`info`](/packages/log/reference/log/Logger/info) | Write `msg` at [`Level::Info`](/packages/log/reference/log/Level#variant-info). |
| [`debug`](/packages/log/reference/log/Logger/debug) | Write `msg` at [`Level::Debug`](/packages/log/reference/log/Level#variant-debug). |

## Examples

```coil
use log::{Logger, Level};
let log = Logger::new(Level::Info);
log.info("server started");
log.debug("not written: below the minimum");
log.error("disk full");
```

## See also

- [`log::Level`](/packages/log/reference/log/Level)
- [`log::format_line`](/packages/log/reference/log/format_line)

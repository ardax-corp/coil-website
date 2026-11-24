---
slug: "log/log/Logger/debug"
package: "log"
title: "Logger::debug"
description: "Write msg at Level::Debug."
module: "log"
kind: "method"
name: "debug"
parent: "Logger"
signature: "pub fn debug(string msg)"
import: "use log::{Logger};"
origin: "package"
source: "https://github.com/ardax-corp/coil-log/blob/9b641422374ce1f7b5643bbc828ad54d8da32952/src/log.coil#L193"
order: 6
---

Write `msg` at [`Level::Debug`](/packages/log/reference/log/Level#variant-debug).

Called on a `Logger` value as `value.debug(…)`.

## Parameters

| Name | Type |
|------|------|
| `msg` | `string` |

## See also

- [`log::Level`](/packages/log/reference/log/Level)
- [`Logger`](/packages/log/reference/log/Logger): A logger that writes events at or above a minimum `Level` to a writer.
- [`Logger::new`](/packages/log/reference/log/Logger/new): A logger writing events at or above `min` to stderr.
- [`Logger::to`](/packages/log/reference/log/Logger/to): A logger writing events at or above `min` to `out`: any `io::Write`, such as a file opened for writing, a socket, or a type of your own.
- [`Logger::log`](/packages/log/reference/log/Logger/log): Write `msg` at `level`, or do nothing when `level` is below the minimum.
- [`Logger::error`](/packages/log/reference/log/Logger/error): Write `msg` at `Level::Error`.
- [`Logger::warn`](/packages/log/reference/log/Logger/warn): Write `msg` at `Level::Warn`.
- [`Logger::info`](/packages/log/reference/log/Logger/info): Write `msg` at `Level::Info`.

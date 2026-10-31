---
slug: "log/log/Logger/warn"
package: "log"
title: "Logger::warn"
description: "Write msg at Level::Warn."
module: "log"
kind: "method"
name: "warn"
parent: "Logger"
signature: "pub fn warn(string msg)"
import: "use log::{Logger};"
origin: "package"
source: "https://github.com/ardax-corp/coil-log/blob/2a00a5ba1086040c2b5368e33f81c44ed036eb87/src/log.hy#L183"
order: 4
---

Write `msg` at [`Level::Warn`](/packages/log/reference/log/Level#variant-warn).

Called on a `Logger` value as `value.warn(…)`.

## Parameters

| Name | Type |
|------|------|
| `msg` | `string` |

## See also

- [`log::Level`](/packages/log/reference/log/Level)
- [`Logger`](/packages/log/reference/log/Logger): A logger that writes events at or above a minimum `Level` to a stream.
- [`Logger::new`](/packages/log/reference/log/Logger/new): A logger writing events at or above `min` to stderr.
- [`Logger::to`](/packages/log/reference/log/Logger/to): A logger writing events at or above `min` to `out`, such as a file opened for writing.
- [`Logger::log`](/packages/log/reference/log/Logger/log): Write `msg` at `level`, or do nothing when `level` is below the minimum.
- [`Logger::error`](/packages/log/reference/log/Logger/error): Write `msg` at `Level::Error`.
- [`Logger::info`](/packages/log/reference/log/Logger/info): Write `msg` at `Level::Info`.
- [`Logger::debug`](/packages/log/reference/log/Logger/debug): Write `msg` at `Level::Debug`.

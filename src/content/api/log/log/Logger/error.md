---
slug: "log/log/Logger/error"
package: "log"
title: "Logger::error"
description: "Write msg at Level::Error."
module: "log"
kind: "method"
name: "error"
parent: "Logger"
signature: "pub fn error(string msg)"
import: "use log::{Logger};"
origin: "package"
source: "https://github.com/ardax-corp/coil-log/blob/17dadae959e85e1d3bf7d7b1904b7e67f50ba247/src/log.hy#L178"
order: 3
---

Write `msg` at [`Level::Error`](/packages/log/reference/log/Level#variant-error).

Called on a `Logger` value as `value.error(…)`.

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
- [`Logger::warn`](/packages/log/reference/log/Logger/warn): Write `msg` at `Level::Warn`.
- [`Logger::info`](/packages/log/reference/log/Logger/info): Write `msg` at `Level::Info`.
- [`Logger::debug`](/packages/log/reference/log/Logger/debug): Write `msg` at `Level::Debug`.

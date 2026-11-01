---
slug: "log/log/Logger/log"
package: "log"
title: "Logger::log"
description: "Write msg at level, or do nothing when level is below the minimum."
module: "log"
kind: "method"
name: "log"
parent: "Logger"
signature: "pub fn log(Level level, string msg)"
import: "use log::{Logger};"
origin: "package"
source: "https://github.com/ardax-corp/coil-log/blob/2a00a5ba1086040c2b5368e33f81c44ed036eb87/src/log.coil#L167"
order: 2
---

Write `msg` at `level`, or do nothing when `level` is below the minimum.

The [`error`](/packages/log/reference/log/Logger/error) / [`warn`](/packages/log/reference/log/Logger/warn) / [`info`](/packages/log/reference/log/Logger/info) / [`debug`](/packages/log/reference/log/Logger/debug) methods are shorthands for this.

Called on a `Logger` value as `value.log(…)`.

## Parameters

| Name | Type |
|------|------|
| `level` | `Level` |
| `msg` | `string` |

## See also

- [`Logger::error`](/packages/log/reference/log/Logger/error)
- [`Logger::warn`](/packages/log/reference/log/Logger/warn)
- [`Logger::info`](/packages/log/reference/log/Logger/info)
- [`Logger::debug`](/packages/log/reference/log/Logger/debug)
- [`Logger`](/packages/log/reference/log/Logger): A logger that writes events at or above a minimum `Level` to a stream.
- [`Logger::new`](/packages/log/reference/log/Logger/new): A logger writing events at or above `min` to stderr.
- [`Logger::to`](/packages/log/reference/log/Logger/to): A logger writing events at or above `min` to `out`, such as a file opened for writing.

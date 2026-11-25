---
slug: "log/log/Logger/new"
package: "log"
title: "Logger::new"
description: "A logger writing events at or above min to stderr."
module: "log"
kind: "static method"
name: "new"
parent: "Logger"
signature: "pub static fn new(Level min) -> Logger"
import: "use log::{Logger};"
origin: "package"
source: "https://github.com/ardax-corp/coil-log/blob/9b641422374ce1f7b5643bbc828ad54d8da32952/src/log.coil#L137"
order: 0
---

A logger writing events at or above `min` to stderr.

## Parameters

| Name | Type |
|------|------|
| `min` | `Level` |

## Returns

`Logger`

## See also

- [`Logger`](/packages/log/reference/log/Logger): A logger that writes events at or above a minimum `Level` to a writer.
- [`Logger::to`](/packages/log/reference/log/Logger/to): A logger writing events at or above `min` to `out`: any `io::Write`, such as a file opened for writing, a socket, or a type of your own.
- [`Logger::log`](/packages/log/reference/log/Logger/log): Write `msg` at `level`, or do nothing when `level` is below the minimum.
- [`Logger::error`](/packages/log/reference/log/Logger/error): Write `msg` at `Level::Error`.
- [`Logger::warn`](/packages/log/reference/log/Logger/warn): Write `msg` at `Level::Warn`.
- [`Logger::info`](/packages/log/reference/log/Logger/info): Write `msg` at `Level::Info`.
- [`Logger::debug`](/packages/log/reference/log/Logger/debug): Write `msg` at `Level::Debug`.

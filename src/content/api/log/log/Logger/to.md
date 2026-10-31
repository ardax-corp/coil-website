---
slug: "log/log/Logger/to"
package: "log"
title: "Logger::to"
description: "A logger writing events at or above min to out, such as a file opened for writing."
module: "log"
kind: "static method"
name: "to"
parent: "Logger"
signature: "pub static fn to(Level min, Stream out) -> Logger"
import: "use log::{Logger};"
origin: "package"
source: "https://github.com/ardax-corp/coil-log/blob/17dadae959e85e1d3bf7d7b1904b7e67f50ba247/src/log.hy#L160"
order: 1
---

A logger writing events at or above `min` to `out`, such as a file opened for writing.

The logger does not close `out`; the caller does.

## Parameters

| Name | Type |
|------|------|
| `min` | `Level` |
| `out` | `Stream` |

## Returns

`Logger`

## Examples

```coil
use log::{Logger, Level};
use io::{open, close, IoError};

fn main() -> Result<(), IoError> {
    let file = open("app.log", "w")?;
    let log = Logger::to(Level::Debug, file);
    log.debug("written to app.log");
    close(file)?;
    return ();
}
```

## See also

- [`Logger`](/packages/log/reference/log/Logger): A logger that writes events at or above a minimum `Level` to a stream.
- [`Logger::new`](/packages/log/reference/log/Logger/new): A logger writing events at or above `min` to stderr.
- [`Logger::log`](/packages/log/reference/log/Logger/log): Write `msg` at `level`, or do nothing when `level` is below the minimum.
- [`Logger::error`](/packages/log/reference/log/Logger/error): Write `msg` at `Level::Error`.
- [`Logger::warn`](/packages/log/reference/log/Logger/warn): Write `msg` at `Level::Warn`.
- [`Logger::info`](/packages/log/reference/log/Logger/info): Write `msg` at `Level::Info`.
- [`Logger::debug`](/packages/log/reference/log/Logger/debug): Write `msg` at `Level::Debug`.

---
slug: "log/log/Level"
package: "log"
title: "Level"
description: "Severity of a log event, from Debug (least severe) to Error (most severe)."
module: "log"
kind: "enum"
name: "Level"
signature: "enum Level"
import: "use log::{Level};"
origin: "package"
source: "https://github.com/ardax-corp/coil-log/blob/2a00a5ba1086040c2b5368e33f81c44ed036eb87/src/log.hy#L25"
order: 0
---

Severity of a log event, from [`Debug`](/packages/log/reference/log/Level#variant-debug) (least severe) to [`Error`](/packages/log/reference/log/Level#variant-error) (most severe).

Levels are ordered by severity, so `Level::Warn >= Level::Info`. A [`Logger`](/packages/log/reference/log/Logger)
writes an event when its level is at least the logger's minimum.

## Variants

### `Debug = 0` {#variant-debug}

Detail for debugging; usually filtered out.

### `Info = 1` {#variant-info}

Normal operation: startup, requests, progress.

### `Warn = 2` {#variant-warn}

Something unexpected that the program recovered from.

### `Error = 3` {#variant-error}

A failure the user or operator should see.

## Examples

```coil
use log::{Level};
use tests::assert;
assert!(Level::Error > Level::Warn);
assert!(Level::Info >= Level::Debug);
```

## See also

- [`log::Logger`](/packages/log/reference/log/Logger)

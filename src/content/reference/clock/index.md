---
slug: "clock/index"
title: "clock"
description: "The clock module."
module: "clock"
kind: "module"
name: "clock"
origin: "builtin"
auto: false
order: 11
---

Built into the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use clock::{wall_nanos, mono_nanos};
```

## Functions

| Name | Description |
|------|-------------|
| [`wall_nanos`](/docs/reference/clock/wall_nanos) | Returns the current wall-clock time in nanoseconds since the Unix epoch (UTC). |
| [`mono_nanos`](/docs/reference/clock/mono_nanos) | Returns monotonic nanoseconds from a process-local starting point. |
| [`sleep_ms`](/docs/reference/clock/sleep_ms) | Pauses for at least `ms` milliseconds. |

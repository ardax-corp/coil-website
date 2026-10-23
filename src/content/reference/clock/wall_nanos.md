---
slug: "clock/wall_nanos"
title: "wall_nanos"
description: "Returns the current wall-clock time in nanoseconds since the Unix epoch (UTC)."
module: "clock"
kind: "fn"
name: "wall_nanos"
signature: "fn wall_nanos() -> int"
import: "use clock::{wall_nanos};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/2fd31a884e4b837b7e70c36633a1a9547b1407c9/compiler/src/builtin_docs/clock.hy#L17"
order: 0
---

Returns the current wall-clock time in nanoseconds since the Unix epoch (UTC).

The wall clock can jump (NTP, manual changes); measure durations with
[`mono_nanos`](/docs/reference/clock/mono_nanos) instead. For dates, formatting and parsing, use the
`coil-time` package.

## Returns

`int`

## Examples

```coil
use clock::{wall_nanos};
use tests::assert;
let secs = wall_nanos() / 1000000000;
assert!(secs > 1600000000);
```

## See also

- [`clock::mono_nanos`](/docs/reference/clock/mono_nanos)
- [`sleep_ms`](/docs/reference/clock/sleep_ms): Pauses for at least `ms` milliseconds.

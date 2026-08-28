---
title: "Time ([coil-time](https://github.com/ardax-corp/coil-time))"
description: "Time is userland in coil-time, not a compiler builtin. use time::{timestamp}; without that package on [module].roots is a module-not-found error. Load with dload(\"time\") the same…"
---

# Time ([coil-time](https://github.com/ardax-corp/coil-time))

Time is **userland** in [coil-time](https://github.com/ardax-corp/coil-time), not a compiler builtin. `use time::{timestamp};` without that package on `[module].roots` is a module-not-found error. Load the package with `dload("time")` the same way as [coil-regex](/docs/references/regex), [coil-tls](/docs/references/tls), and [coil-crypto](/docs/references/crypto). Application code imports the Coil wrappers. It does not call `dload` itself.

## Sibling checkout

Clone [coil-time](https://github.com/ardax-corp/coil-time) beside your project and point `coil.toml` at it:

```toml
[module]
roots = ["./src", "../coil-time/src"]

[ffi]
search_paths = ["../coil-time/native"]
allow = ["time"]

[dependencies]
time = { path = "../coil-time", trusted = true }
```

`dload("time")` needs `[ffi] allow` plus `trusted = true` on the coil-time dep (or a matching `[[package.native]] sha256`). `search_paths` locates `libtime`; it is not a grant.

Build the native library from that package root (`make`), then:

```coil
use time::{timestamp, sleep_ms, instant_now, TimeError};

let ts = timestamp()?;
```

**Docs:** [coil-time](https://github.com/ardax-corp/coil-time) · [consume.md](https://github.com/ardax-corp/coil-time/blob/main/docs/consume.md)

## Install via spool (future)

```toml
[dependencies]
time = { git = "https://github.com/ardax-corp/coil-time.git", trusted = true }

[module]
roots = ["./src", "./.spool/deps/time/src"]

[ffi]
search_paths = ["./.spool/deps/time/native"]
allow = ["time"]
```

Same gate: allow plus trusted (or a lock hash). This repo has no tags yet. `{ git }` is the parseable form.

## Names

Shipped exports in `src/time.hy`:

| Name | Notes |
|------|--------|
| `timestamp` / `epoch` / `date` | UTC `Timestamp` |
| `sleep_ms` | Negative millis is `InvalidInput` |
| `instant_now` / `elapsed_nanos` / `elapsed_millis` | Opaque Instant handle |
| `period` | Nine `int` fields |
| `add` / `sub` | Timestamp ± Period |
| `period_add` / `period_sub` | Field-wise, `Overflow` on i64 wrap |
| `date_from_period` / `date_from_epoch_period` | Calendar date; month/day 0 is `InvalidInput` |
| `format` / `parse` | chrono format string |
| `TimeError` | `InvalidInput`, `Overflow`, `ParseError`, `Other` |
| `Instant` | Opaque native handle. `drop` frees it |

```coil
use time::{instant_now, elapsed_nanos, Instant, TimeError};

let inst = instant_now();
let ns = elapsed_nanos(inst)?;
inst.drop();
```

`Instant.drop` removes the handle from the native map. A second Coil `drop` is a no-op. `elapsed_nanos` / `elapsed_millis` on a missing handle is `TimeError::InvalidInput`.

`Timestamp` fields (`secs`, `millis`, `micros`, `nanos`) are the same instant at four scales. `Period` is nine independent fields (years … nanos).

## Migrating from virtual `time`

Add coil-time to `[module].roots`. `use time` without that package is a module-not-found error. Recompile any stale `.hyc` that imported the old virtual module.

---

## Related

- [What is NOT a builtin](/docs/references/not-builtins)
- [Getting Started](/docs/manual/getting-started)
- [Modules](/docs/references/modules)

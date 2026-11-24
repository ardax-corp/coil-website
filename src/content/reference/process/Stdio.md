---
slug: "process/Stdio"
title: "Stdio"
description: "Where a child's standard stream goes."
module: "process"
kind: "enum"
name: "Stdio"
signature: "enum Stdio"
import: "use process::{Stdio};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/prelude/process.coil#L10"
order: 0
---

Where a child's standard stream goes.

## Variants

### `Inherit = 0` {#variant-inherit}

The child shares this process's stream (the default for `spawn`).

### `Pipe = 1` {#variant-pipe}

A pipe this process reads or writes: [`Child::stdin`](/docs/reference/process/Child/stdin), `stdout`, `stderr`.

### `Null = 2` {#variant-null}

Nothing: reads see end of input, writes are dropped.

## See also

- [`Child::stdin`](/docs/reference/process/Child/stdin)
- [`ProcessError`](/docs/reference/process/ProcessError): Why a process call failed.

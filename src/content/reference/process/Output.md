---
slug: "process/Output"
title: "Output"
description: "What output collected: the exit code and everything the child wrote. Bytes that are not UTF-8 become U+FFFD; read Child::stdout as a Stream for raw bytes."
module: "process"
kind: "class"
name: "Output"
signature: "class Output"
import: "use process::{Output};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/ea16288b0bd35fbe92e6665d44f9277d1dec7d29/compiler/src/prelude/process.hy#L73"
order: 4
---

What `output` collected: the exit code and everything the child wrote. Bytes that are not UTF-8 become U+FFFD; read [`Child::stdout`](/docs/reference/process/Child/stdout) as a `Stream` for raw bytes.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `status` | `int` |  |
| `stdout` | `string` |  |
| `stderr` | `string` |  |

## See also

- [`Child::stdout`](/docs/reference/process/Child/stdout)
- [`Command`](/docs/reference/process/Command): A program to run: its arguments, environment, working directory and standard streams.
- [`Child`](/docs/reference/process/Child): A started child process.

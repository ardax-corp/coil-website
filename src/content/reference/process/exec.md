---
slug: "process/exec"
title: "exec"
description: "Runs program with argv (the arguments after the program name) and waits for it. It shares this process's working directory, environment and standard streams. Returns the exit code (128 + signal on POSIX when a signal ended it)."
module: "process"
kind: "fn"
name: "exec"
signature: "fn exec(string program, Vec<string> argv) -> Result<int, ProcessError>"
import: "use process::{exec};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/prelude/process.coil#L137"
order: 5
---

Runs `program` with `argv` (the arguments after the program name) and waits for it. It shares this process's working directory, environment and standard streams. Returns the exit code (`128 + signal` on POSIX when a signal ended it).

## Parameters

| Name | Type |
|------|------|
| `program` | `string` |
| `argv` | `Vec<string>` |

## Returns

`Result<int, ProcessError>`

## Errors

`Err(ProcessError::Spawn(e))` when the program could not be started.

## Examples

```coil
use process::{exec};
use tests::assert;
let code = exec("sh", ["-c", "exit 3"]).unwrap_or(-1);
assert!(code == 3);
```

---
slug: "env/exec"
title: "exec"
description: "Runs program with the arguments argv and waits for it to finish."
module: "env"
kind: "fn"
name: "exec"
signature: "fn exec(string program, Vec<string> argv) -> Result<int, EnvError>"
import: "use env::{exec};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/env.hy#L179"
order: 8
---

Runs `program` with the arguments `argv` and waits for it to finish.

There is no shell: `program` is looked up on `PATH` (unless it is a
path) and `argv` excludes the program name. The child inherits this
process's working directory, environment and standard streams. Returns
`Ok(exit_code)`, or `Err(EnvError::ExecFailed)` if the program cannot be
started or was killed by a signal. Needs `--allow-exec`; without the
grant the program does not compile (error `E0406`).

## Parameters

| Name | Type |
|------|------|
| `program` | `string` |
| `argv` | `Vec<string>` |

## Returns

`Result<int, EnvError>`

## Examples

```coil
use env::{exec};
use tests::assert;
let argv: Vec<string> = Vec::from(["-c", "exit 3"]);
let code = match exec("sh", argv) {
    Result::Ok(c) => c,
    Result::Err(_) => -1,
};
assert!(code == 3);
```

## See also

- [`args`](/docs/reference/env/args): Returns the program's command-line arguments, starting with the program name.
- [`var`](/docs/reference/env/var): Returns the value of the environment variable name.
- [`set_var`](/docs/reference/env/set_var): Sets the environment variable name to value for this process.
- [`remove_var`](/docs/reference/env/remove_var): Removes the environment variable name from this process.
- [`cwd`](/docs/reference/env/cwd): Returns the current working directory as an absolute path.
- [`set_cwd`](/docs/reference/env/set_cwd): Changes the current working directory of the whole process.
- [`exit`](/docs/reference/env/exit): Ends the process at once with exit status code.

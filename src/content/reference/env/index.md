---
slug: "env/index"
title: "env"
description: "Command-line arguments, environment variables, working directory, exit and exec."
module: "env"
kind: "module"
name: "env"
origin: "builtin"
auto: false
order: 10
---

[`args`](/docs/reference/env/args) and [`cwd`](/docs/reference/env/cwd) need no grant. Reading or changing variables and [`set_cwd`](/docs/reference/env/set_cwd)
need `--allow-env`, [`exec`](/docs/reference/env/exec) needs `--allow-exec` and [`exit`](/docs/reference/env/exit) needs
`--allow-exit`; see [Permissions](/docs/language/permissions). [`exec`](/docs/reference/env/exec) runs a
program with an argument vector, without a shell, in the current working
directory and environment.

Built into the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use env::{EnvError, args};
```

## Types

| Name | Description |
|------|-------------|
| [`EnvError`](/docs/reference/env/EnvError) | The error of every fallible `env` function. |

## Functions

| Name | Description |
|------|-------------|
| [`args`](/docs/reference/env/args) | Returns the program's command-line arguments, starting with the program name. |
| [`var`](/docs/reference/env/var) | Returns the value of the environment variable `name`. |
| [`set_var`](/docs/reference/env/set_var) | Sets the environment variable `name` to `value` for this process. |
| [`remove_var`](/docs/reference/env/remove_var) | Removes the environment variable `name` from this process. |
| [`cwd`](/docs/reference/env/cwd) | Returns the current working directory as an absolute path. |
| [`set_cwd`](/docs/reference/env/set_cwd) | Changes the current working directory of the whole process. |
| [`exit`](/docs/reference/env/exit) | Ends the process at once with exit status `code`. |
| [`exec`](/docs/reference/env/exec) | Runs `program` with the arguments `argv` and waits for it to finish. |

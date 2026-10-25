---
slug: "env/args"
title: "args"
description: "Returns the program's command-line arguments, starting with the program name."
module: "env"
kind: "fn"
name: "args"
signature: "fn args() -> Result<Vec<string>, EnvError>"
import: "use env::{args};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/builtin_docs/env.hy#L50"
order: 1
---

Returns the program's command-line arguments, starting with the program name.

Always `Ok`. Needs no permission.

## Returns

`Result<Vec<string>, EnvError>`

## Examples

```coil
use env::{args};
use tests::assert;
let argv = match args() {
    Result::Ok(a) => a,
    Result::Err(_) => Vec::new(),
};
assert!(argv.len() >= 1);
```

## See also

- [`var`](/docs/reference/env/var): Returns the value of the environment variable `name`.
- [`set_var`](/docs/reference/env/set_var): Sets the environment variable `name` to `value` for this process.
- [`remove_var`](/docs/reference/env/remove_var): Removes the environment variable `name` from this process.
- [`cwd`](/docs/reference/env/cwd): Returns the current working directory as an absolute path.
- [`set_cwd`](/docs/reference/env/set_cwd): Changes the current working directory of the whole process.
- [`exit`](/docs/reference/env/exit): Ends the process at once with exit status `code`.
- [`exec`](/docs/reference/env/exec): Runs `program` with the arguments `argv` and waits for it to finish.

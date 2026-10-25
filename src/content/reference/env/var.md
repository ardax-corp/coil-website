---
slug: "env/var"
title: "var"
description: "Returns the value of the environment variable name."
module: "env"
kind: "fn"
name: "var"
signature: "fn var(string name) -> Result<string, EnvError>"
import: "use env::{var};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/builtin_docs/env.hy#L70"
order: 2
---

Returns the value of the environment variable `name`.

Returns `Err(EnvError::NotFound)` when it is not set and
`Err(EnvError::Other)` when its value is not valid UTF-8. Needs
`--allow-env`.

## Parameters

| Name | Type |
|------|------|
| `name` | `string` |

## Returns

`Result<string, EnvError>`

## Examples

```coil
use env::{var, set_var};
use tests::assert;
let _ = set_var("COIL_DOC_GREETING", "hello");
let v = match var("COIL_DOC_GREETING") {
    Result::Ok(s) => s,
    Result::Err(_) => "",
};
assert!(v == "hello");
```

## See also

- [`args`](/docs/reference/env/args): Returns the program's command-line arguments, starting with the program name.
- [`set_var`](/docs/reference/env/set_var): Sets the environment variable `name` to `value` for this process.
- [`remove_var`](/docs/reference/env/remove_var): Removes the environment variable `name` from this process.
- [`cwd`](/docs/reference/env/cwd): Returns the current working directory as an absolute path.
- [`set_cwd`](/docs/reference/env/set_cwd): Changes the current working directory of the whole process.
- [`exit`](/docs/reference/env/exit): Ends the process at once with exit status `code`.
- [`exec`](/docs/reference/env/exec): Runs `program` with the arguments `argv` and waits for it to finish.

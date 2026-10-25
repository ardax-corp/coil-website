---
slug: "env/remove_var"
title: "remove_var"
description: "Removes the environment variable name from this process."
module: "env"
kind: "fn"
name: "remove_var"
signature: "fn remove_var(string name) -> Result<unit, EnvError>"
import: "use env::{remove_var};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/builtin_docs/env.hy#L105"
order: 4
---

Removes the environment variable `name` from this process.

Removing a variable that is not set is not an error. Needs `--allow-env`.

## Parameters

| Name | Type |
|------|------|
| `name` | `string` |

## Returns

`Result<unit, EnvError>`

## Examples

```coil
use env::{set_var, remove_var, var, EnvError};
use tests::assert;
let _ = set_var("COIL_DOC_TMP", "1");
let _ = remove_var("COIL_DOC_TMP");
let gone = match var("COIL_DOC_TMP") {
    Result::Err(EnvError::NotFound) => true,
    default => false,
};
assert!(gone);
```

## See also

- [`args`](/docs/reference/env/args): Returns the program's command-line arguments, starting with the program name.
- [`var`](/docs/reference/env/var): Returns the value of the environment variable `name`.
- [`set_var`](/docs/reference/env/set_var): Sets the environment variable `name` to `value` for this process.
- [`cwd`](/docs/reference/env/cwd): Returns the current working directory as an absolute path.
- [`set_cwd`](/docs/reference/env/set_cwd): Changes the current working directory of the whole process.
- [`exit`](/docs/reference/env/exit): Ends the process at once with exit status `code`.
- [`exec`](/docs/reference/env/exec): Runs `program` with the arguments `argv` and waits for it to finish.

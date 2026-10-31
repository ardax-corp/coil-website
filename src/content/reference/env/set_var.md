---
slug: "env/set_var"
title: "set_var"
description: "Sets the environment variable name to value for this process."
module: "env"
kind: "fn"
name: "set_var"
signature: "fn set_var(string name, string value) -> Result<unit, EnvError>"
import: "use env::{set_var};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/env.coil#L80"
order: 3
---

Sets the environment variable `name` to `value` for this process.

Programs started later (the [`process`](/docs/reference/process) module) inherit it. A name or value with a
NUL byte is `Err(EnvError::InvalidInput)`. Needs `--allow-env`.

## Parameters

| Name | Type |
|------|------|
| `name` | `string` |
| `value` | `string` |

## Returns

`Result<unit, EnvError>`

## Examples

```coil
use env::{set_var, var, remove_var};
use tests::assert;
assert!(match set_var("COIL_DOC_MODE", "test") { Result::Ok(_) => true, Result::Err(_) => false });
assert!(match var("COIL_DOC_MODE") { Result::Ok(s) => s == "test", Result::Err(_) => false });
let _ = remove_var("COIL_DOC_MODE");
```

## See also

- [`process`](/docs/reference/process)
- [`args`](/docs/reference/env/args): Returns the program's command-line arguments, starting with the program name.
- [`var`](/docs/reference/env/var): Returns the value of the environment variable `name`.
- [`remove_var`](/docs/reference/env/remove_var): Removes the environment variable `name` from this process.
- [`cwd`](/docs/reference/env/cwd): Returns the current working directory as an absolute path.
- [`set_cwd`](/docs/reference/env/set_cwd): Changes the current working directory of the whole process.
- [`exit`](/docs/reference/env/exit): Ends the process at once with exit status `code`.

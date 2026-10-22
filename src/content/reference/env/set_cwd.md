---
slug: "env/set_cwd"
title: "set_cwd"
description: "Changes the current working directory of the whole process."
module: "env"
kind: "fn"
name: "set_cwd"
signature: "fn set_cwd(string path) -> Result<unit, EnvError>"
import: "use env::{set_cwd};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/398a75756bed65b1ece7801a7a0f96154af4c6fb/compiler/src/builtin_docs/env.hy#L140"
order: 6
---

Changes the current working directory of the whole process.

Relative paths opened later, and programs started with [`exec`](/docs/reference/env/exec), use the
new directory. Returns `Err(EnvError::Other)` if `path` does not exist
or is not an accessible directory. Needs `--allow-env`.

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |

## Returns

`Result<unit, EnvError>`

## Examples

```coil
use env::{cwd, set_cwd};
use tests::assert;
let before = match cwd() { Result::Ok(d) => d, Result::Err(_) => "/" };
assert!(match set_cwd("/tmp") { Result::Ok(_) => true, Result::Err(_) => false });
let _ = set_cwd(before);
```

## See also

- [`env::exec`](/docs/reference/env/exec)
- [`args`](/docs/reference/env/args): Returns the program's command-line arguments, starting with the program name.
- [`var`](/docs/reference/env/var): Returns the value of the environment variable name.
- [`set_var`](/docs/reference/env/set_var): Sets the environment variable name to value for this process.
- [`remove_var`](/docs/reference/env/remove_var): Removes the environment variable name from this process.
- [`cwd`](/docs/reference/env/cwd): Returns the current working directory as an absolute path.
- [`exit`](/docs/reference/env/exit): Ends the process at once with exit status code.

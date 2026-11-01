---
slug: "env/cwd"
title: "cwd"
description: "Returns the current working directory as an absolute path."
module: "env"
kind: "fn"
name: "cwd"
signature: "fn cwd() -> Result<string, EnvError>"
import: "use env::{cwd};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/env.coil#L117"
order: 5
---

Returns the current working directory as an absolute path.

Returns `Err(EnvError::Other)` if it cannot be read (for example when it
was deleted). Needs no permission.

## Returns

`Result<string, EnvError>`

## Examples

```coil
use env::{cwd};
use tests::assert;
let dir = match cwd() {
    Result::Ok(d) => d,
    Result::Err(_) => "",
};
assert!(dir.len() > 0);
```

## See also

- [`args`](/docs/reference/env/args): Returns the program's command-line arguments, starting with the program name.
- [`var`](/docs/reference/env/var): Returns the value of the environment variable `name`.
- [`set_var`](/docs/reference/env/set_var): Sets the environment variable `name` to `value` for this process.
- [`remove_var`](/docs/reference/env/remove_var): Removes the environment variable `name` from this process.
- [`set_cwd`](/docs/reference/env/set_cwd): Changes the current working directory of the whole process.
- [`exit`](/docs/reference/env/exit): Ends the process at once with exit status `code`.

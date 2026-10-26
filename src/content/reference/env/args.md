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
source: "https://github.com/ardax-corp/coil-lang/blob/fc46180d7eca01b66211d0caab301eae32c93c41/compiler/src/builtin_docs/env.hy#L44"
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

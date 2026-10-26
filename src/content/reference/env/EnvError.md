---
slug: "env/EnvError"
title: "EnvError"
description: "The error of every fallible env function."
module: "env"
kind: "enum"
name: "EnvError"
signature: "enum EnvError"
import: "use env::{EnvError};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/12901b3580d5c7df098353b1e92eedcb7e41f91d/compiler/src/builtin_docs/env.hy#L18"
order: 0
---

The error of every fallible [`env`](/docs/reference/env) function.

It implements [`Show`](/docs/reference/prelude/ops/Show), so `format("%v", e)` gives the variant name.

## Variants

### `InvalidInput` {#variant-invalidinput}

An argument is malformed, for example a name, value or path that
contains a NUL byte.

### `NotFound` {#variant-notfound}

[`var`](/docs/reference/env/var) asked for a variable that is not set.

### `ExecFailed` {#variant-execfailed}

[`exec`](/docs/reference/env/exec) could not start the program, or the program was ended by a
signal and has no exit code.

### `Other` {#variant-other}

Any other failure: the working directory cannot be read or changed,
or a variable's value is not valid UTF-8.

## Examples

```coil
use env::{var, EnvError};
use tests::assert;
let missing = match var("COIL_DOC_SURELY_UNSET") {
    Result::Err(EnvError::NotFound) => true,
    default => false,
};
assert!(missing);
```

## See also

- [`env`](/docs/reference/env)
- [`Show`](/docs/reference/prelude/ops/Show)
- [`env::var`](/docs/reference/env/var)
- [`env::exec`](/docs/reference/env/exec)

---
slug: "env/exit"
title: "exit"
description: "Ends the process at once with exit status code."
module: "env"
kind: "fn"
name: "exit"
signature: "fn exit(int code)"
import: "use env::{exit};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/2fd31a884e4b837b7e70c36633a1a9547b1407c9/compiler/src/builtin_docs/env.hy#L156"
order: 7
---

Ends the process at once with exit status `code`.

Does not return. Needs `--allow-exit`; without the grant the program does
not compile (error `E0407`).

## Parameters

| Name | Type |
|------|------|
| `code` | `int` |

## Examples

```coil
use env::{exit};
let ok = true;
if ok {
    exit(0);
}
```

## See also

- [`args`](/docs/reference/env/args): Returns the program's command-line arguments, starting with the program name.
- [`var`](/docs/reference/env/var): Returns the value of the environment variable `name`.
- [`set_var`](/docs/reference/env/set_var): Sets the environment variable `name` to `value` for this process.
- [`remove_var`](/docs/reference/env/remove_var): Removes the environment variable `name` from this process.
- [`cwd`](/docs/reference/env/cwd): Returns the current working directory as an absolute path.
- [`set_cwd`](/docs/reference/env/set_cwd): Changes the current working directory of the whole process.
- [`exec`](/docs/reference/env/exec): Runs `program` with the arguments `argv` and waits for it to finish.

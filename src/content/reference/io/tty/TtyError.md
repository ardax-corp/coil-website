---
slug: "io/tty/TtyError"
title: "TtyError"
description: "The error of the fallible io::tty functions."
module: "io::tty"
kind: "enum"
name: "TtyError"
signature: "enum TtyError"
import: "use io::tty::{TtyError};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/e553eda99b575bb4f78c04622508caa036a1a01b/compiler/src/builtin_docs/io/tty.hy#L21"
order: 0
---

The error of the fallible [`io::tty`](/docs/reference/io/tty) functions.

It implements [`Show`](/docs/reference/prelude/ops/Show): [`NotATerminal`](/docs/reference/io/tty/TtyError#variant-notaterminal), or `Io(<IoError>)`.

## Variants

### `NotATerminal` {#variant-notaterminal}

The stream is not a terminal (a file, pipe or socket).

### `Io(IoError)` {#variant-io}

The stream itself failed, for example it is closed.

## Examples

```coil
use io::{stdin};
use io::tty::{size, TtyError};
let cols = match size(stdin()) {
    Result::Ok(sz) => {
        let (c, _) = sz;
        c
    },
    Result::Err(TtyError::NotATerminal) => 80,
    Result::Err(TtyError::Io(_)) => 0,
};
```

## See also

- [`io::tty`](/docs/reference/io/tty)
- [`Show`](/docs/reference/prelude/ops/Show)

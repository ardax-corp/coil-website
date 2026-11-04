---
title: "greet"
description: "Demo Coil library for spool. Function-style on purpose: userland classes are not importable across modules yet."
source: "https://github.com/ardax-corp/coil-greet/blob/d2c67da20f2922fdfc7e35ac8bb7f66c0ec8f100/README.md"
---
# greet

Demo Coil library for [spool](https://github.com/ardax-corp/spool). Function-style on purpose: userland classes are not importable across modules yet.

## Layout

```text
coil.toml
src/hello.hy    # use greet::hello
```

`spool` links `.spool/deps/greet` at this package's `src/` directory so `use greet::hello` resolves to `hello.hy`.

## Consume

```toml
[dependencies]
greet = { git = "https://github.com/ardax-corp/coil-greet.git", version = "^0.1" }
```

```bash
spool add greet --git https://github.com/ardax-corp/coil-greet.git --version '^0.1'
# or: spool add greet --path /path/to/coil-greet
```

```coil
use greet::hello;
```

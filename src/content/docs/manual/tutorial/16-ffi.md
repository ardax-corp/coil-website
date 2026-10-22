---
title: Chapter 16 — Calling C
description: "Calling functions in C shared libraries with extern blocks, loading libraries at run time with dload, the types that cross the boundary, and the flags that allow a library to load."
---

# Chapter 16 — Calling C

Coil can call functions in C shared libraries, which opens up the large
world of existing C code: compression, databases, graphics, cryptography.
Several [packages](/packages) (SQLite, SDL, Vulkan, TLS) are built this
way. This chapter calls a small library of your own.

C code runs outside Coil's checks, and a bug in it can crash the whole
program. Keep the C side small and wrap it in Coil functions with clear
types.

## A C library

Save this as `geom.c`:

```c
#include <stdint.h>

int64_t add(int64_t a, int64_t b) {
    return a + b;
}

double hypot2(double a, double b) {
    return a * a + b * b;
}

int64_t count_char(const char *s, int64_t c) {
    int64_t n = 0;
    for (; *s; s++) {
        if (*s == c) {
            n++;
        }
    }
    return n;
}
```

and build it as a shared library:

| Platform | Command |
|----------|---------|
| Linux | `cc -shared -fPIC -o libgeom.so geom.c` |
| macOS | `cc -dynamiclib -o libgeom.dylib geom.c` |
| Windows | `clang -shared -o geom.dll geom.c` |

## extern blocks

An `extern` block names a library and lists the functions you want from it.
After that they are called like any Coil function:

```coil ignore
use io::sync::{println};
use string::{format};

extern "geom" {
    fn add(int a, int b) -> int;
    fn hypot2(float a, float b) -> float;
    fn count_char(string s, int c) -> int;
}

fn main() {
    println(format("%i %f %i", add(40, 2), hypot2(3.0, 4.0), count_char("banana", 97)))?;
}
```

Output:

```text
42 25.0 3
```

`"geom"` is the library's *stem*: the compiler looks for `libgeom.so`,
`libgeom.dylib` or `geom.dll` in the directories given with
`--ffi-search-path`. The signatures must match the C declarations exactly;
nothing can check them.

## Allowing a library to load

Loading native code is the most powerful thing a program can do, so it
needs two things: permission to load the stem (`--allow-dload geom`), and
either the library's SHA-256 hash, so a swapped file is refused, or an
explicit statement that you trust it:

```bash
coil --root ~/.coil/stdlib/src --ffi-search-path . \
  --allow-dload geom --dload-pin geom=$(sha256sum libgeom.so | cut -c1-64) main.hy

# while developing:
coil --root ~/.coil/stdlib/src --ffi-search-path . \
  --allow-dload geom --dload-trusted geom main.hy
```

Without them, the compiler stops with
``E0410: `dload` of `geom` requires `--allow-dload geom` ``. The C library
itself (`"c"`) can never be loaded this way. In a spool project, these
settings live in `coil.toml` under `[ffi]` and in `coil.lock`; see
[coil.toml](/docs/language/project-config#ffi).

## Types across the boundary

| Coil | C |
|------|---|
| `int` | `int64_t` |
| `float` | `double` |
| `bool` | `bool` |
| `string` | `const char *` (NUL-terminated UTF-8; C must not keep the pointer) |
| `int8` … `uint64` | the fixed-size integer types |
| `ptr` | `void *` |
| `Bytes` (from a `Vec<byte>`) | `uint8_t *` that C may write into |
| `ConstBytes` (from a `string` or `Vec<byte>`) | read-only `const uint8_t *`, no NUL |
| `Callback` | a C function pointer that calls back into Coil |
| `extern struct Point { x: int32, y: int32 };` | a C struct passed by value |

A function without `->` returns nothing (`void`). A C function that takes a
variable number of arguments is declared with a trailing `...`:
`fn sum_n(int n, ...) -> int;`. Strings returned from C are copied into a
Coil string straight away, so C must return memory that is still valid at
that moment (not a pointer to a local array).

## Loading at run time

`extern` fixes the library and functions when the program compiles. To
choose them while the program runs, for example for plugins, use
[`ffi::dload`](/docs/reference/ffi/dload), [`declare`](/docs/reference/ffi/declare)
and [`invoke`](/docs/reference/ffi/invoke). Each step can fail and returns a
`Result`:

```coil ignore
use io::sync::{println};
use ffi::{dload, declare, invoke, Error};
use ffi::types::{Int};

fn add_via_plugin() -> Result<int, Error> {
    let lib = dload("geom")?;
    let add = declare(lib, "add", (Int, Int), Int)?;
    return invoke(lib, add, (40, 2));
}

fn main() {
    println(show(add_via_plugin() ?? -1))?;
}
```

Output:

```text
42
```

The same permission flags apply.

## Shipping

`coil package` builds a single executable, but shared libraries are not
embedded in it. Ship `libgeom.so` next to the executable (or in `./lib`, or
in the natives cache `~/.coil/natives`); `--check-native` makes
`coil package` verify the libraries it needs are present. spool's
`[[ffi.native]]` entries and `spool download` automate this for packages
that use native code.

## Exercises

1. Add `int64_t triple(int64_t x)` to `geom.c` and call it through the
   `extern` block.
2. Write a Coil function `safe_count(string s, string ch) -> int` that
   checks `ch` is one byte long before calling `count_char`.
3. Declare `add` with the wrong number of arguments through `declare` and
   look at the `Err` it returns.

That is the end of the tutorial. From here, the [reference](/docs/reference)
has a page for every module, type and function, and the
[packages](/packages) page lists libraries to build on.

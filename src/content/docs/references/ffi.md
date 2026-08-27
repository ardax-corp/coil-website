---
title: "FFI (`dload` / `declare` / `invoke` / `extern`)"
description: "Runtime FFI callables are exports of the virtual ffi module. They are not keywords and are not in scope until you import them:"
---

# FFI (`dload` / `declare` / `invoke` / `extern`)

Runtime FFI callables are exports of the virtual `ffi` module. They are **not** keywords and are **not** in scope until you import them:

```coil
use ffi::{dload, declare, invoke};
use ffi::types::{Int, String, Ptr};
```

Or import individually: `use ffi::dload;`, `use ffi::declare;`, `use ffi::invoke;`.

### `dload`

Load a native shared library at runtime.

```coil
dload(path_expr)
```

| Argument | Type | Description |
|----------|------|-------------|
| `path_expr` | `string` | Basename, path, or alias passed to the library resolver |

Returns `Result<int, Error>` — `Ok` is the library handle (heap object address). Failure is `Err(Error)`, never `-1`.

```coil
use ffi::{dload};
let lib = match dload("sum") {
    Result::Ok(h) => h,
    Result::Err(e) => panic e.message,
};
```

Notes:

- Requires libffi-enabled build.
- The `dload` gate runs before the process opens the file. See [Project config — `[ffi]`](/docs/references/project-config#ffi).
- First-party stems `time`, `crypto`, `tls`, and `regex` load with **no** lock hash and without `[ffi] allow`. A missing file for one of those stems is `ErrorKind::LibraryNotFound`.
- Extra stems need `[ffi] allow` **and** a matching `coil.lock` `[[package.native]] sha256`. Denied extras are `ErrorKind::Other`.
- `[ffi] search_paths` locates files (`dload("sum")` → `libsum.so` / `libsum.dylib` / `sum.dll` via `platform_lib_names`). It is not a grant. `sum` is an extra stem.
- `dload("c")` / `extern "c"` stay **deny** (libc aliases). An absolute path is not a bypass — the gate uses the filename stem.
- Same resolver as the string in `extern "..." { ... }` blocks (`extern` does **not** require `use ffi::{…};`; it unwraps Results and panics on `e.message`).
- Check `e.kind` (`ErrorKind::LibraryNotFound`, …) for recovery; use `e.message` for display.

---

### `declare`

Register a C function signature in a loaded library.

```coil
declare(lib, name, (arg_types...), ret_type)
declare(lib, name, (arg_types...), ret_type, variadic)
```

| Argument | Type | Description |
|----------|------|-------------|
| `lib` | `int` | Handle from a successful `dload` (`Result::Ok`) |
| `name` | `string` | Symbol name for `dlsym` |
| `(arg_types...)` | Tuple of FFI tags | Fixed-prefix tags (before C `...` when variadic) |
| `ret_type` | FFI tag | Return type (`void` allowed) |
| `variadic` | `bool` (optional) | `true` for C-style varargs (`printf`-style) |

Returns `Result<int, Error>` — `Ok` is the function id; `Err` if the symbol is missing or libffi rejects the signature (`ErrorKind::SymbolNotFound`, `Libffi`, …). When `variadic` is `true`, later `invoke` calls may pass more arguments than the fixed prefix; the CIF is rebuilt per call with default C promotions on the tail.

### FFI type tags (`ffi::types`)

Tag constructors live in the virtual `ffi::types` module. After `use ffi::types::{Int, Ptr, …};`, write bare `Int`, `Ptr`, `Callback`, …:

```coil
use ffi::{declare};
use ffi::types::{Int, String};

declare(lib, "f", (Int, String), Int);
declare(lib, "g", (int, float), void);   // bare lowercase names still work
declare(lib, "h", (ffi::types::Ptr,), Int); // qualified path needs no import
```

| Tag | Meaning |
|-----|---------|
| `int` / `Int` | 64-bit integer |
| `float` / `Float` | 64-bit float |
| `string` / `String` | C string |
| `void` / `Void` | No return value only |
| `Ptr` / `Callback` / … | See [FFI tutorial](/docs/manual/tutorial/07-ffi) |

`void` cannot appear as an argument type. There is no global bare `FFIType` name — import `ffi::types` (or use the qualified `ffi::types::Int` path).

---

### `invoke`

Call a function registered with `declare`.

```coil
invoke(lib, fn_id, (args...))
```

| Argument | Type | Description |
|----------|------|-------------|
| `lib` | `int` | Same library handle |
| `fn_id` | `int` | Id from a successful `declare` |
| `(args...)` | Tuple of values | Must match declared arity (or `>=` fixed prefix when `declare` was variadic) |

        Returns `Result<T, Error>` where `T` is the type recorded from the matching `declare(..., ret)` (`unit` for `void`). The compiler refines `T` when the fn-id expression is:

- a `let id = declare(...)?` binding (or a local copied from one, e.g. `let id = api.fn_id`);
- a class field that was assigned `self.fn_id = declare(...)?` in an `impl` initializer;
- a function parameter when every call site passes a value with known `declare` metadata (e.g. `helper(api.fn_id)`).

Direct `invoke(lib, api.fn_id, …)` uses the field table; a bare parameter `id` uses call-site flow recorded from callers (including a module pre-pass before inference).

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
let n = match invoke(lib, sum_id, (40, 2)) {
    Result::Ok(v) => v,
    Result::Err(e) => panic e.message,
};
write_all(stdout(), to_bytes(format("%i", n)));
```

### `Error` / `ErrorKind`

Virtual `ffi` exports (via `use ffi::{Error, ErrorKind};`):

| Name | Shape |
|------|-------|
| `ErrorKind` | Unit enum — `LibraryNotFound`, `SymbolNotFound`, `ArityMismatch`, `Libffi`, `InvalidSignature`, `InvalidHandle`, `Unsupported`, `Other` |
| `Error` | `Error { kind: ErrorKind, message: string }` — access `e.kind` / `e.message` |

Match on `e.kind` for recovery; use `e.message` for logging / `panic`. A library blocked by the `dload` gate (unknown stem, missing allow+hash, hash mismatch, or libc) is `ErrorKind::Other`. Missing first-party files stay `LibraryNotFound`.

---

## Compile-time FFI (`extern` blocks)

Not separate builtins — the compiler lowers extern declarations to `dload` / `declare` / `invoke` sequences. User code calls look like normal functions:

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
extern "c" {
    fn strlen(string s) -> int;
    fn printf(string fmt, ...) -> int;   // C varargs — bare `...`
}

fn main() {
    write_all(stdout(), to_bytes(format("%i", strlen("hello"))));
}
```

`extern "c"` is a libc alias and is **denied** by the same gate as `dload("c")`. Compiler-emitted setup unwraps `dload`/`declare`/`invoke` Results and panics with a clear message on failure. See [FFI tutorial](/docs/manual/tutorial/07-ffi) and [Project config — `[ffi]`](/docs/references/project-config#ffi).

---

## Related

- [Project configuration](/docs/references/project-config#ffi) — `[ffi] allow` / `search_paths` / first-party stems
- [FFI tutorial](/docs/manual/tutorial/07-ffi)
- [Getting Started](/docs/manual/getting-started)
- [Host embedder API](/docs/references/host-natives) — Rust closures via `HostInvoke` (embedder API, not the `dload` gate)

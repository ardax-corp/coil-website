---
title: Host embedder API
description: "Advanced: register Rust closures callable from Coil without a .so file."
---

# Host embedder API

Advanced: register Rust closures callable from Coil without a `.so` file.

These calls sit behind the `compiler` crate's `vm-wire` feature, and the
compiler's own tests are what use them. A `coil` build has no step that hands a
registered closure to a run, so a program cannot call one yet.

### Rust API

```rust
use compiler::pipeline::Pipeline;
use machine::ffi::{FfiSignature, FfiSignatureBuilder};
use machine::memory::{FfiType, Heap};
use common::Value;

let mut pipeline = Pipeline::default();

let sig = FfiSignatureBuilder::new("my_add")
    .arg(FfiType::Int)
    .arg(FfiType::Int)
    .ret(FfiType::Int)
    .build()
    .unwrap();

pipeline.register_host_native(sig, |heap: &mut Heap, args: &[Value]| {
    let sum = args[0].as_int() + args[1].as_int();
    Ok(Some(Value::from(sum)))
});
```

### Workflow

| Step | API |
|------|-----|
| Register type + closure | `Pipeline::register_host_native(sig, closure)` |
| Typecheck user calls | Signatures forwarded to HM checker via `Compiler::register` |

### Metadata-only registration

`Pipeline::register_native_function(name, namespace, sig)` registers types without a closure — for tooling or deferred wiring.

### When to use

| Approach | Use when |
|----------|----------|
| Host natives | Embedding coil in a Rust app; hot callbacks without a shared library |
| `extern` / `dload` | Calling existing C libraries; plugins as `.so` files (subject to the [`dload` gate](/docs/language/project-config#ffi)) |

---

## Related

- [ffi](/docs/reference/ffi)
- [Project config — `[ffi]`](/docs/language/project-config#ffi) — `dload` gate (`HostInvoke` is not that gate)

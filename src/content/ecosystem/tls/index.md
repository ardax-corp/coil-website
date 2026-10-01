---
title: "coil-tls"
description: "Userland TLS for coil. rustls lives in a Rust cdylib (libtls.so / .dylib / .dll) loaded with dload(\"tls\"), not in the interpreter."
source: "https://github.com/ardax-corp/coil-tls/blob/07a2aaca083152644ad09d51d8489bb6be0b4425/README.md"
---
# coil-tls

Userland TLS for [coil](https://github.com/ardax-corp/coil-lang). rustls lives in a Rust cdylib (`libtls.so` / `.dylib` / `.dll`) loaded with `dload("tls")`, not in the interpreter.

Package name is `tls`, so `use tls::{client, server}` and `use tls::alpn_protocol` keep working after the virtual `io::net::tls` module is removed.


## Layout

| Path | Role |
|------|------|
| `src/tls/client.hy` | `enable(Stream, host, ClientOpts)` via dload + `Stream.attach` |
| `src/tls/server.hy` | `enable(Stream, ServerOpts)` / `disable(Stream)` |
| `src/tls.hy` | `alpn_protocol(Stream)` |
| `src/tls/abi.hy` | C ABI `Session` helpers (`coil_tls_*`); not the HTTP-facing API |
| `native/` | rustls 0.23 cdylib, leftover-shaped `coil_tls_*` plus attach hooks |
| `docs/` | API and consume notes |

Handshake stays non-blocking. One rustls step per call, then `Stream.park` on WouldBlock. Do not handshake on a blocking thread.

Needs [coil-lang #204](https://github.com/ardax-corp/coil-lang/pull/204) (`Stream.attach` / `Stream.park`; leftover TLS deleted).

## Build

```bash
cargo test --manifest-path native/Cargo.toml
cargo build --release --manifest-path native/Cargo.toml
# copy native/target/release/libtls.so (or .dylib / tls.dll) to native/
# so [ffi] search_paths = ["./native"] resolves dload("tls")
```

Consume from a sibling checkout, or a git dep plus `coil.lock` pin. See [docs/consume.md](/packages/tls/consume).

```toml
[dependencies]
tls = { git = "https://github.com/ardax-corp/coil-tls.git" }
```

`{ git }` is the parseable form. `version` is optional schema, not a tag. The pin is `coil.lock` `rev` + `content_hash`. Spool will own Coil-to-Coil deps once it exists. There is no `spool add` yet. Native libs stay on `[ffi] search_paths` for now.

## License

MIT — see [LICENSE](https://github.com/ardax-corp/coil-tls/tree/07a2aaca083152644ad09d51d8489bb6be0b4425/LICENSE).

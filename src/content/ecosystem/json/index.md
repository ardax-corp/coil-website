---
title: "coil-json"
description: "Userland JSON for coil. Package name is json, so use json::{Json, JsonValue, JsonError} resolves here."
source: "https://github.com/ardax-corp/coil-json/blob/90a8780eea653646fb7901bcbae8ee4028aeac9e/README.md"
---
# coil-json

Userland JSON for [coil](https://github.com/ardax-corp/coil-lang). Package name is `json`, so `use json::{Json, JsonValue, JsonError}` resolves here.

This package owns one-shot encode/decode and JSONC parse mode. coil-stdlib must not `use json`. There is no `src/codec/json.hy` here or in stdlib.

## API

```coil
use json::{Json, JsonValue, JsonError};

let j = Json::strict();
let v = j.decode_str("{\"a\":[1,true,null]}")?;
let bytes = j.encode(v)?;

let c = Json::jsonc();
let v2 = c.decode_str("// cfg\n{ \"a\": 1, }")?;
```

`Json::strict()` is RFC 8259 only. `Json::jsonc()` is parse-only sugar: comments and trailing commas on decode; encode stays RFC 8259; not JSON5. Invalid input returns `JsonError` with 1-based line/column (`Invalid`, `Io`, `Utf8`, `Number`), not panic.

| Method | Role |
|--------|------|
| `Json::strict()` | Strict RFC 8259 codec |
| `Json::jsonc()` | Same encode; decode allows comments and trailing commas |
| `decode` / `encode` | `Vec<byte>` |
| `decode_str` / `encode_str` | UTF-8 string helpers |

`JsonValue` is a class (not an enum). Coil named modules do not unify recursive `Vec<JsonValue>` (`JsonValue` vs `json::JsonValue`), and `FFIType` already owns `Bool`/`Int`/`Float`/`String`. The tree is an arena of primitive vecs; a `JsonValue` is a `(store, idx)` handle.

Object representation: ordered children. Each object member is a child node whose `keys[child]` is the member name. Duplicates are kept in encounter order. Not a HashMap.

Numbers: a token with no `.` / `e` / `E` that fits in i64 is an int; otherwise float. Overflow and non-finite floats are `JsonError::Number`.

## Layout

| Path | Role |
|------|------|
| `src/json.hy` | `Json`, `JsonValue`, `JsonError`, Coil-side parser/stringify |
| `coil.toml` | `[package] name = "json"` so `use json::{…}` resolves |

## Consume

Sibling checkout, or a git dep plus `coil.lock` pin. Call `Json::strict()` from [docs/consume.md](/packages/json/consume).

```toml
[dependencies]
json = { git = "https://github.com/ardax-corp/coil-json.git" }
```

`{ git }` is the parseable form. `version` is optional schema, not a tag. The pin is `coil.lock` `rev` + `content_hash`. coil-stdlib is a sibling `[module] roots` entry, not a spool dependency of this package.

## License

MIT. See [LICENSE](https://github.com/ardax-corp/coil-json/tree/90a8780eea653646fb7901bcbae8ee4028aeac9e/LICENSE).

---
slug: "http/http/hpack/HpackTable"
package: "http"
title: "HpackTable"
description: "An HPACK dynamic table (RFC 7541 §2.3), for one direction of one connection."
module: "http::hpack"
kind: "class"
name: "HpackTable"
signature: "class HpackTable"
import: "use http::hpack::{HpackTable};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/hpack.hy#L91"
order: 3
---

An HPACK dynamic table (RFC 7541 §2.3), for one direction of one connection.

The encoder and the decoder of a connection each keep one; reusing it across
header blocks lets later blocks refer to fields added by earlier ones. Entries
are kept oldest first and evicted oldest first.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `names` | `Vec<string>` | Entry names, oldest first. |
| `values` | `Vec<string>` | Entry values; `values[i]` belongs to `names[i]`. |
| `cap` | `int` | Upper bound for the table size, from SETTINGS_HEADER_TABLE_SIZE. |
| `max_size` | `int` | Current maximum size in octets (at most `cap`; lowered by size updates). |
| `size` | `int` | Current size in octets (name + value + 32 per entry). |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/hpack/HpackTable/new) | An empty table with limit `cap` octets (the RFC default is 4096). |

## Examples

```coil
use tests::assert;
use http::hpack::{HpackTable, decode_header_block_with, encode_header_block_with};
use http::url::Headers;

let h = Headers::new();
h.add(":method", "GET");
h.add("x-trace", "abc");
let enc = HpackTable::new(4096);
let dec = HpackTable::new(4096);
let first = encode_header_block_with(h, enc);
let second = encode_header_block_with(h, enc);
assert!(second.len() < first.len());
let a = match decode_header_block_with(first, dec) {
    Result::Ok(v) => v,
    Result::Err(e) => panic show(e),
};
let b = match decode_header_block_with(second, dec) {
    Result::Ok(v) => v,
    Result::Err(e) => panic show(e),
};
assert!(b.value_at(1) == "abc");
```

## See also

- [`HpackInt`](/packages/http/reference/http/hpack/HpackInt): A decoded HPACK integer (RFC 7541 §5.1) and the offset just past it.
- [`HpackStr`](/packages/http/reference/http/hpack/HpackStr): A decoded HPACK string literal (RFC 7541 §5.2) and the offset just past it.
- [`HpackNV`](/packages/http/reference/http/hpack/HpackNV): A decoded literal header field (name and value) and the offset just past it.

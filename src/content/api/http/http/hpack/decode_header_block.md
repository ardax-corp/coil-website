---
slug: "http/http/hpack/decode_header_block"
package: "http"
title: "decode_header_block"
description: "Decodes an HPACK header block with a fresh 4096-octet table."
module: "http::hpack"
kind: "fn"
name: "decode_header_block"
signature: "fn decode_header_block(Vec<byte> raw) -> Result<Headers, HttpError>"
import: "use http::hpack::{decode_header_block};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/hpack.hy#L1101"
order: 14
---

Decodes an HPACK header block with a fresh 4096-octet table.

Returns `Protocol` for an index outside the tables, a truncated block or a
bad Huffman string.

## Parameters

| Name | Type |
|------|------|
| `raw` | `Vec<byte>` |

## Returns

`Result<Headers, HttpError>`

## Examples

```coil
use tests::assert;
use http::hpack::{decode_header_block, encode_header_block};
use http::url::Headers;

let h = Headers::new();
h.add(":status", "200");
h.add("content-type", "text/plain");
let back = match decode_header_block(encode_header_block(h)) {
    Result::Ok(v) => v,
    Result::Err(e) => panic show(e),
};
assert!(back.count() == 2);
assert!(back.name_at(1) == "content-type");
```

## See also

- [`encode_hpack_int`](/packages/http/reference/http/hpack/encode_hpack_int): Encode `value` with an `nbits` prefix.
- [`decode_hpack_int`](/packages/http/reference/http/hpack/decode_hpack_int): Decode an integer with an `nbits` prefix starting at `pos`.
- [`decode_hpack_huffman`](/packages/http/reference/http/hpack/decode_hpack_huffman): Decodes an RFC 7541 Appendix B Huffman string.
- [`encode_hpack_huffman`](/packages/http/reference/http/hpack/encode_hpack_huffman): Huffman-encodes `raw` with the RFC 7541 Appendix B code, padded with 1-bits to a whole octet.
- [`encode_hpack_string`](/packages/http/reference/http/hpack/encode_hpack_string): String literal: Huffman (H=1) when strictly shorter, otherwise raw (H=0).
- [`decode_hpack_string`](/packages/http/reference/http/hpack/decode_hpack_string): Decode a string literal at `pos`.
- [`hpack_table_resize`](/packages/http/reference/http/hpack/hpack_table_resize): Apply SETTINGS_HEADER_TABLE_SIZE: both decoder cap and max become `cap`.
- [`encode_header_block_with`](/packages/http/reference/http/hpack/encode_header_block_with): HEADERS payload: indexed (1xxxxxxx) or literal with incremental indexing (01xxxxxx).

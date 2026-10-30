---
slug: "http/http/hpack/index"
package: "http"
title: "http::hpack"
description: "HPACK header compression (RFC 7541): static and dynamic tables, Huffman coding."
module: "http::hpack"
kind: "module"
name: "http::hpack"
origin: "package"
auto: false
order: 5
---

Part of the [http](/packages/http) package ([coil-http](https://github.com/ardax-corp/coil-http)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/http)).

Import what you use (`use path::*` is not allowed):

```coil
use http::hpack::{HpackInt, HpackStr};
```

## Types

| Name | Description |
|------|-------------|
| [`HpackInt`](/packages/http/reference/http/hpack/HpackInt) | Integer decode cursor (RFC 7541 §5.1). |
| [`HpackStr`](/packages/http/reference/http/hpack/HpackStr) | String literal decode cursor (RFC 7541 §5.2). |
| [`HpackNV`](/packages/http/reference/http/hpack/HpackNV) | Literal name/value plus resume offset. |
| [`HpackTable`](/packages/http/reference/http/hpack/HpackTable) | Decoder dynamic table (RFC 7541 §2.3). |

## Functions

| Name | Description |
|------|-------------|
| [`encode_hpack_int`](/packages/http/reference/http/hpack/encode_hpack_int) | Encode `value` with an `nbits` prefix. |
| [`decode_hpack_int`](/packages/http/reference/http/hpack/decode_hpack_int) | Decode an integer with an `nbits` prefix starting at `pos`. |
| [`huff_fill`](/packages/http/reference/http/hpack/huff_fill) | RFC 7541 Appendix B codes, LSB-aligned, plus bit lengths. |
| [`encode_hpack_huffman`](/packages/http/reference/http/hpack/encode_hpack_huffman) | RFC 7541 Appendix B Huffman coding, padded with 1-bits to an octet boundary. |
| [`encode_hpack_string`](/packages/http/reference/http/hpack/encode_hpack_string) | String literal: Huffman (H=1) when strictly shorter, otherwise raw (H=0). |
| [`decode_hpack_string`](/packages/http/reference/http/hpack/decode_hpack_string) | Decode a string literal at `pos`. |
| [`hpack_table_resize`](/packages/http/reference/http/hpack/hpack_table_resize) | Apply SETTINGS_HEADER_TABLE_SIZE: both decoder cap and max become `cap`. |
| [`encode_header_block_with`](/packages/http/reference/http/hpack/encode_header_block_with) | HEADERS payload: indexed (1xxxxxxx) or literal with incremental indexing (01xxxxxx). |
| [`encode_header_block`](/packages/http/reference/http/hpack/encode_header_block) | One-shot encode into a fresh 4096-octet table. |
| [`decode_header_block_with`](/packages/http/reference/http/hpack/decode_header_block_with) | Decode a HEADERS payload, mutating `t` (incremental indexing / size updates). |
| [`decode_header_block`](/packages/http/reference/http/hpack/decode_header_block) | Decode a HEADERS payload into `Headers`. |

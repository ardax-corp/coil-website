---
slug: "http/http/hpack/encode_hpack_int"
package: "http"
title: "encode_hpack_int"
description: "Encode value with an nbits prefix. hi is the high (8-nbits) bits of the first octet."
module: "http::hpack"
kind: "fn"
name: "encode_hpack_int"
signature: "fn encode_hpack_int(Vec<byte> out, int value, int nbits, int hi)"
import: "use http::hpack::{encode_hpack_int};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/hpack.hy#L144"
order: 4
---

Encode `value` with an `nbits` prefix. `hi` is the high (8-nbits) bits of the first octet.

## Parameters

| Name | Type |
|------|------|
| `out` | `Vec<byte>` |
| `value` | `int` |
| `nbits` | `int` |
| `hi` | `int` |

## See also

- [`decode_hpack_int`](/packages/http/reference/http/hpack/decode_hpack_int): Decode an integer with an `nbits` prefix starting at `pos`.
- [`decode_hpack_huffman`](/packages/http/reference/http/hpack/decode_hpack_huffman): Decodes an RFC 7541 Appendix B Huffman string.
- [`encode_hpack_huffman`](/packages/http/reference/http/hpack/encode_hpack_huffman): Huffman-encodes `raw` with the RFC 7541 Appendix B code, padded with 1-bits to a whole octet.
- [`encode_hpack_string`](/packages/http/reference/http/hpack/encode_hpack_string): String literal: Huffman (H=1) when strictly shorter, otherwise raw (H=0).
- [`decode_hpack_string`](/packages/http/reference/http/hpack/decode_hpack_string): Decode a string literal at `pos`.
- [`hpack_table_resize`](/packages/http/reference/http/hpack/hpack_table_resize): Apply SETTINGS_HEADER_TABLE_SIZE: both decoder cap and max become `cap`.
- [`encode_header_block_with`](/packages/http/reference/http/hpack/encode_header_block_with): HEADERS payload: indexed (1xxxxxxx) or literal with incremental indexing (01xxxxxx).
- [`encode_header_block`](/packages/http/reference/http/hpack/encode_header_block): HPACK-encodes `h` with a fresh 4096-octet table (one-shot; see `encode_header_block_with`).

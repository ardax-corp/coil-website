---
slug: "http/http/hpack/decode_hpack_string"
package: "http"
title: "decode_hpack_string"
description: "Decode a string literal at pos. Huffman (H=1) uses RFC 7541 Appendix B."
module: "http::hpack"
kind: "fn"
name: "decode_hpack_string"
signature: "fn decode_hpack_string(Vec<byte> raw, int pos) -> Result<HpackStr, HttpError>"
import: "use http::hpack::{decode_hpack_string};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/hpack.hy#L571"
order: 9
---

Decode a string literal at `pos`. Huffman (H=1) uses RFC 7541 Appendix B.

## Parameters

| Name | Type |
|------|------|
| `raw` | `Vec<byte>` |
| `pos` | `int` |

## Returns

`Result<HpackStr, HttpError>`

## See also

- [`encode_hpack_int`](/packages/http/reference/http/hpack/encode_hpack_int): Encode `value` with an `nbits` prefix.
- [`decode_hpack_int`](/packages/http/reference/http/hpack/decode_hpack_int): Decode an integer with an `nbits` prefix starting at `pos`.
- [`decode_hpack_huffman`](/packages/http/reference/http/hpack/decode_hpack_huffman): Decodes an RFC 7541 Appendix B Huffman string.
- [`encode_hpack_huffman`](/packages/http/reference/http/hpack/encode_hpack_huffman): Huffman-encodes `raw` with the RFC 7541 Appendix B code, padded with 1-bits to a whole octet.
- [`encode_hpack_string`](/packages/http/reference/http/hpack/encode_hpack_string): String literal: Huffman (H=1) when strictly shorter, otherwise raw (H=0).
- [`hpack_table_resize`](/packages/http/reference/http/hpack/hpack_table_resize): Apply SETTINGS_HEADER_TABLE_SIZE: both decoder cap and max become `cap`.
- [`encode_header_block_with`](/packages/http/reference/http/hpack/encode_header_block_with): HEADERS payload: indexed (1xxxxxxx) or literal with incremental indexing (01xxxxxx).
- [`encode_header_block`](/packages/http/reference/http/hpack/encode_header_block): HPACK-encodes `h` with a fresh 4096-octet table (one-shot; see `encode_header_block_with`).

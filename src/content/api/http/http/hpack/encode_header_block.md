---
slug: "http/http/hpack/encode_header_block"
package: "http"
title: "encode_header_block"
description: "HPACK-encodes h with a fresh 4096-octet table (one-shot; see encode_header_block_with)."
module: "http::hpack"
kind: "fn"
name: "encode_header_block"
signature: "fn encode_header_block(Headers h) -> Vec<byte>"
import: "use http::hpack::{encode_header_block};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/hpack.hy#L1033"
order: 12
---

HPACK-encodes `h` with a fresh 4096-octet table (one-shot; see [`encode_header_block_with`](/packages/http/reference/http/hpack/encode_header_block_with)).

## Parameters

| Name | Type |
|------|------|
| `h` | `Headers` |

## Returns

`Vec<byte>`

## See also

- [`http::hpack::encode_header_block_with`](/packages/http/reference/http/hpack/encode_header_block_with)
- [`encode_hpack_int`](/packages/http/reference/http/hpack/encode_hpack_int): Encode `value` with an `nbits` prefix.
- [`decode_hpack_int`](/packages/http/reference/http/hpack/decode_hpack_int): Decode an integer with an `nbits` prefix starting at `pos`.
- [`decode_hpack_huffman`](/packages/http/reference/http/hpack/decode_hpack_huffman): Decodes an RFC 7541 Appendix B Huffman string.
- [`encode_hpack_huffman`](/packages/http/reference/http/hpack/encode_hpack_huffman): Huffman-encodes `raw` with the RFC 7541 Appendix B code, padded with 1-bits to a whole octet.
- [`encode_hpack_string`](/packages/http/reference/http/hpack/encode_hpack_string): String literal: Huffman (H=1) when strictly shorter, otherwise raw (H=0).
- [`decode_hpack_string`](/packages/http/reference/http/hpack/decode_hpack_string): Decode a string literal at `pos`.
- [`hpack_table_resize`](/packages/http/reference/http/hpack/hpack_table_resize): Apply SETTINGS_HEADER_TABLE_SIZE: both decoder cap and max become `cap`.

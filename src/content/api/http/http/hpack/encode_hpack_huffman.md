---
slug: "http/http/hpack/encode_hpack_huffman"
package: "http"
title: "encode_hpack_huffman"
description: "Huffman-encodes raw with the RFC 7541 Appendix B code, padded with 1-bits to a whole octet."
module: "http::hpack"
kind: "fn"
name: "encode_hpack_huffman"
signature: "fn encode_hpack_huffman(Vec<byte> raw) -> Vec<byte>"
import: "use http::hpack::{encode_hpack_huffman};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/hpack.hy#L514"
order: 7
---

Huffman-encodes `raw` with the RFC 7541 Appendix B code, padded with 1-bits to a whole octet.

## Parameters

| Name | Type |
|------|------|
| `raw` | `Vec<byte>` |

## Returns

`Vec<byte>`

## See also

- [`encode_hpack_int`](/packages/http/reference/http/hpack/encode_hpack_int): Encode `value` with an `nbits` prefix.
- [`decode_hpack_int`](/packages/http/reference/http/hpack/decode_hpack_int): Decode an integer with an `nbits` prefix starting at `pos`.
- [`decode_hpack_huffman`](/packages/http/reference/http/hpack/decode_hpack_huffman): Decodes an RFC 7541 Appendix B Huffman string.
- [`encode_hpack_string`](/packages/http/reference/http/hpack/encode_hpack_string): String literal: Huffman (H=1) when strictly shorter, otherwise raw (H=0).
- [`decode_hpack_string`](/packages/http/reference/http/hpack/decode_hpack_string): Decode a string literal at `pos`.
- [`hpack_table_resize`](/packages/http/reference/http/hpack/hpack_table_resize): Apply SETTINGS_HEADER_TABLE_SIZE: both decoder cap and max become `cap`.
- [`encode_header_block_with`](/packages/http/reference/http/hpack/encode_header_block_with): HEADERS payload: indexed (1xxxxxxx) or literal with incremental indexing (01xxxxxx).
- [`encode_header_block`](/packages/http/reference/http/hpack/encode_header_block): HPACK-encodes `h` with a fresh 4096-octet table (one-shot; see `encode_header_block_with`).

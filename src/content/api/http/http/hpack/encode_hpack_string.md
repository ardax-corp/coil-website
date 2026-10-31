---
slug: "http/http/hpack/encode_hpack_string"
package: "http"
title: "encode_hpack_string"
description: "String literal: Huffman (H=1) when strictly shorter, otherwise raw (H=0)."
module: "http::hpack"
kind: "fn"
name: "encode_hpack_string"
signature: "fn encode_hpack_string(Vec<byte> out, string s)"
import: "use http::hpack::{encode_hpack_string};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/hpack.hy#L550"
order: 8
---

String literal: Huffman (H=1) when strictly shorter, otherwise raw (H=0).

## Parameters

| Name | Type |
|------|------|
| `out` | `Vec<byte>` |
| `s` | `string` |

## See also

- [`encode_hpack_int`](/packages/http/reference/http/hpack/encode_hpack_int): Encode `value` with an `nbits` prefix.
- [`decode_hpack_int`](/packages/http/reference/http/hpack/decode_hpack_int): Decode an integer with an `nbits` prefix starting at `pos`.
- [`decode_hpack_huffman`](/packages/http/reference/http/hpack/decode_hpack_huffman): Decodes an RFC 7541 Appendix B Huffman string.
- [`encode_hpack_huffman`](/packages/http/reference/http/hpack/encode_hpack_huffman): Huffman-encodes `raw` with the RFC 7541 Appendix B code, padded with 1-bits to a whole octet.
- [`decode_hpack_string`](/packages/http/reference/http/hpack/decode_hpack_string): Decode a string literal at `pos`.
- [`hpack_table_resize`](/packages/http/reference/http/hpack/hpack_table_resize): Apply SETTINGS_HEADER_TABLE_SIZE: both decoder cap and max become `cap`.
- [`encode_header_block_with`](/packages/http/reference/http/hpack/encode_header_block_with): HEADERS payload: indexed (1xxxxxxx) or literal with incremental indexing (01xxxxxx).
- [`encode_header_block`](/packages/http/reference/http/hpack/encode_header_block): HPACK-encodes `h` with a fresh 4096-octet table (one-shot; see `encode_header_block_with`).

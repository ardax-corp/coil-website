---
slug: "http/http/hpack/hpack_table_resize"
package: "http"
title: "hpack_table_resize"
description: "Apply SETTINGS_HEADER_TABLE_SIZE: both decoder cap and max become cap."
module: "http::hpack"
kind: "fn"
name: "hpack_table_resize"
signature: "fn hpack_table_resize(HpackTable t, int cap)"
import: "use http::hpack::{hpack_table_resize};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/hpack.hy#L861"
order: 10
---

Apply SETTINGS_HEADER_TABLE_SIZE: both decoder cap and max become `cap`.

## Parameters

| Name | Type |
|------|------|
| `t` | `HpackTable` |
| `cap` | `int` |

## See also

- [`encode_hpack_int`](/packages/http/reference/http/hpack/encode_hpack_int): Encode `value` with an `nbits` prefix.
- [`decode_hpack_int`](/packages/http/reference/http/hpack/decode_hpack_int): Decode an integer with an `nbits` prefix starting at `pos`.
- [`huff_fill`](/packages/http/reference/http/hpack/huff_fill): RFC 7541 Appendix B codes, LSB-aligned, plus bit lengths.
- [`encode_hpack_huffman`](/packages/http/reference/http/hpack/encode_hpack_huffman): RFC 7541 Appendix B Huffman coding, padded with 1-bits to an octet boundary.
- [`encode_hpack_string`](/packages/http/reference/http/hpack/encode_hpack_string): String literal: Huffman (H=1) when strictly shorter, otherwise raw (H=0).
- [`decode_hpack_string`](/packages/http/reference/http/hpack/decode_hpack_string): Decode a string literal at `pos`.
- [`encode_header_block_with`](/packages/http/reference/http/hpack/encode_header_block_with): HEADERS payload: indexed (1xxxxxxx) or literal with incremental indexing (01xxxxxx).
- [`encode_header_block`](/packages/http/reference/http/hpack/encode_header_block): One-shot encode into a fresh 4096-octet table.

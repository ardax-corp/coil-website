---
slug: "http/http/hpack/decode_hpack_int"
package: "http"
title: "decode_hpack_int"
description: "Decode an integer with an nbits prefix starting at pos."
module: "http::hpack"
kind: "fn"
name: "decode_hpack_int"
signature: "fn decode_hpack_int(Vec<byte> raw, int pos, int nbits) -> Result<HpackInt, HttpError>"
import: "use http::hpack::{decode_hpack_int};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/hpack.hy#L117"
order: 5
---

Decode an integer with an `nbits` prefix starting at `pos`.

## Parameters

| Name | Type |
|------|------|
| `raw` | `Vec<byte>` |
| `pos` | `int` |
| `nbits` | `int` |

## Returns

`Result<HpackInt, HttpError>`

## See also

- [`encode_hpack_int`](/packages/http/reference/http/hpack/encode_hpack_int): Encode `value` with an `nbits` prefix.
- [`huff_fill`](/packages/http/reference/http/hpack/huff_fill): RFC 7541 Appendix B codes, LSB-aligned, plus bit lengths.
- [`encode_hpack_huffman`](/packages/http/reference/http/hpack/encode_hpack_huffman): RFC 7541 Appendix B Huffman coding, padded with 1-bits to an octet boundary.
- [`encode_hpack_string`](/packages/http/reference/http/hpack/encode_hpack_string): String literal: Huffman (H=1) when strictly shorter, otherwise raw (H=0).
- [`decode_hpack_string`](/packages/http/reference/http/hpack/decode_hpack_string): Decode a string literal at `pos`.
- [`hpack_table_resize`](/packages/http/reference/http/hpack/hpack_table_resize): Apply SETTINGS_HEADER_TABLE_SIZE: both decoder cap and max become `cap`.
- [`encode_header_block_with`](/packages/http/reference/http/hpack/encode_header_block_with): HEADERS payload: indexed (1xxxxxxx) or literal with incremental indexing (01xxxxxx).
- [`encode_header_block`](/packages/http/reference/http/hpack/encode_header_block): One-shot encode into a fresh 4096-octet table.

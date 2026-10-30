---
slug: "msgpack/msgpack/MsgpackValue"
package: "msgpack"
title: "MsgpackValue"
description: "MessagePack value. Maps are ordered key/value children. Duplicates are kept."
module: "msgpack"
kind: "class"
name: "MsgpackValue"
signature: "class MsgpackValue"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/28282558ca88aab4179bd52d695227e467bf08d3/src/msgpack.hy#L192"
order: 2
---

MessagePack value. Maps are ordered key/value children. Duplicates are kept.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `flag` | `bool` |  |
| `i` | `int` |  |
| `f` | `float` |  |
| `s` | `string` |  |

## Associated functions

| Name | Description |
|------|-------------|
| [`wrap`](/packages/msgpack/reference/msgpack/MsgpackValue/wrap) |  |
| [`nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil) |  |
| [`from_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bool) |  |
| [`from_int`](/packages/msgpack/reference/msgpack/MsgpackValue/from_int) |  |
| [`nan`](/packages/msgpack/reference/msgpack/MsgpackValue/nan) |  |
| [`inf`](/packages/msgpack/reference/msgpack/MsgpackValue/inf) |  |
| [`from_float`](/packages/msgpack/reference/msgpack/MsgpackValue/from_float) |  |
| [`from_string`](/packages/msgpack/reference/msgpack/MsgpackValue/from_string) |  |
| [`from_bin`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bin) |  |
| [`from_ext`](/packages/msgpack/reference/msgpack/MsgpackValue/from_ext) | `ty` is the extension type code (-128..=127). |
| [`empty_array`](/packages/msgpack/reference/msgpack/MsgpackValue/empty_array) |  |
| [`empty_map`](/packages/msgpack/reference/msgpack/MsgpackValue/empty_map) |  |

## Methods

| Name | Description |
|------|-------------|
| [`is_nil`](/packages/msgpack/reference/msgpack/MsgpackValue/is_nil) |  |
| [`is_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/is_bool) |  |
| [`is_int`](/packages/msgpack/reference/msgpack/MsgpackValue/is_int) |  |
| [`is_float`](/packages/msgpack/reference/msgpack/MsgpackValue/is_float) |  |
| [`is_string`](/packages/msgpack/reference/msgpack/MsgpackValue/is_string) |  |
| [`is_bin`](/packages/msgpack/reference/msgpack/MsgpackValue/is_bin) |  |
| [`is_array`](/packages/msgpack/reference/msgpack/MsgpackValue/is_array) |  |
| [`is_map`](/packages/msgpack/reference/msgpack/MsgpackValue/is_map) |  |
| [`is_ext`](/packages/msgpack/reference/msgpack/MsgpackValue/is_ext) |  |
| [`array_len`](/packages/msgpack/reference/msgpack/MsgpackValue/array_len) |  |
| [`map_len`](/packages/msgpack/reference/msgpack/MsgpackValue/map_len) |  |
| [`bin_len`](/packages/msgpack/reference/msgpack/MsgpackValue/bin_len) |  |
| [`ext_type`](/packages/msgpack/reference/msgpack/MsgpackValue/ext_type) |  |
| [`bytes`](/packages/msgpack/reference/msgpack/MsgpackValue/bytes) |  |
| [`child`](/packages/msgpack/reference/msgpack/MsgpackValue/child) | Nth array element, or nth map value. |
| [`key_at`](/packages/msgpack/reference/msgpack/MsgpackValue/key_at) | Nth map key. |
| [`has`](/packages/msgpack/reference/msgpack/MsgpackValue/has) |  |
| [`get`](/packages/msgpack/reference/msgpack/MsgpackValue/get) | First string-key match. |
| [`append`](/packages/msgpack/reference/msgpack/MsgpackValue/append) | Copy `child` onto the end of this array. |
| [`put`](/packages/msgpack/reference/msgpack/MsgpackValue/put) | Copy `key` and `val` onto the end of this map. |
| [`encode_buf`](/packages/msgpack/reference/msgpack/MsgpackValue/encode_buf) |  |

## See also

- [`Copier`](/packages/msgpack/reference/msgpack/Copier): Holds both arenas so the recursive copy takes only an index.
- [`Parser`](/packages/msgpack/reference/msgpack/Parser)
- [`Msgpack`](/packages/msgpack/reference/msgpack/Msgpack): MessagePack codec.
- [`Store`](/packages/msgpack/reference/msgpack/Store)

---
slug: "msgpack/msgpack/Store"
package: "msgpack"
title: "Store"
description: "Class Store."
module: "msgpack"
kind: "class"
name: "Store"
signature: "shared class Store"
import: "use msgpack::{Store};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/28282558ca88aab4179bd52d695227e467bf08d3/src/msgpack.hy#L51"
order: 5
---

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `tags` | `Vec<int>` |  |
| `flags` | `Vec<bool>` |  |
| `ints` | `Vec<int>` |  |
| `floats` | `Vec<float>` |  |
| `strs` | `Vec<string>` |  |
| `keys` | `Vec<string>` |  |
| `bins` | `Vec<Vec<byte>>` |  |
| `first` | `Vec<int>` |  |
| `next` | `Vec<int>` |  |

## Associated functions

| Name | Description |
|------|-------------|
| [`with_capacity`](/packages/msgpack/reference/msgpack/Store/with_capacity) |  |
| [`new`](/packages/msgpack/reference/msgpack/Store/new) |  |
| [`copy_bytes`](/packages/msgpack/reference/msgpack/Store/copy_bytes) |  |
| [`inf_float`](/packages/msgpack/reference/msgpack/Store/inf_float) |  |
| [`nan_float`](/packages/msgpack/reference/msgpack/Store/nan_float) |  |

## Methods

| Name | Description |
|------|-------------|
| [`add`](/packages/msgpack/reference/msgpack/Store/add) |  |
| [`attach`](/packages/msgpack/reference/msgpack/Store/attach) |  |
| [`nth_child`](/packages/msgpack/reference/msgpack/Store/nth_child) |  |

## See also

- [`Copier`](/packages/msgpack/reference/msgpack/Copier): Holds both arenas so the recursive copy takes only an index.
- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): MessagePack value.
- [`Parser`](/packages/msgpack/reference/msgpack/Parser)
- [`Msgpack`](/packages/msgpack/reference/msgpack/Msgpack): MessagePack codec.

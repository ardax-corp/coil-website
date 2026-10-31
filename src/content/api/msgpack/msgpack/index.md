---
slug: "msgpack/msgpack/index"
package: "msgpack"
title: "msgpack"
description: "MessagePack encode and decode, covering every type including extensions and timestamps."
module: "msgpack"
kind: "module"
name: "msgpack"
origin: "package"
auto: false
order: 0
---

Decode with [`Msgpack::standard()`](/packages/msgpack/reference/msgpack/Msgpack/standard) and walk the result as a [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue); errors are a [`MsgpackError`](/packages/msgpack/reference/msgpack/MsgpackError).

Part of the [msgpack](/packages/msgpack) package ([coil-msgpack](https://github.com/ardax-corp/coil-msgpack)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/msgpack)).

Import what you use (`use path::*` is not allowed):

```coil
use msgpack::{MsgpackError, MsgpackValue};
```

## Types

| Name | Description |
|------|-------------|
| [`MsgpackError`](/packages/msgpack/reference/msgpack/MsgpackError) | Why a decode, encode or build step failed. |
| [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue) | A MessagePack value: nil, bool, int, float, string, binary, array, map or extension. |
| [`Msgpack`](/packages/msgpack/reference/msgpack/Msgpack) | A MessagePack codec: one-shot decode of bytes to a [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue), and encode back. |

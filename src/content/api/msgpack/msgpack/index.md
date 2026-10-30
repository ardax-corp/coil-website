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
use msgpack::{Copier, MsgpackError};
```

## Types

| Name | Description |
|------|-------------|
| [`Copier`](/packages/msgpack/reference/msgpack/Copier) | Holds both arenas so the recursive copy takes only an index. |
| [`MsgpackError`](/packages/msgpack/reference/msgpack/MsgpackError) | Decode/encode failure. |
| [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue) | MessagePack value. |
| [`Parser`](/packages/msgpack/reference/msgpack/Parser) |  |
| [`Msgpack`](/packages/msgpack/reference/msgpack/Msgpack) | MessagePack codec. |
| [`Store`](/packages/msgpack/reference/msgpack/Store) |  |

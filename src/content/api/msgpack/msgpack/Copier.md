---
slug: "msgpack/msgpack/Copier"
package: "msgpack"
title: "Copier"
description: "Holds both arenas so the recursive copy takes only an index. A Store parameter on a recursive method does not unify (Store vs msgpack::Store)."
module: "msgpack"
kind: "class"
name: "Copier"
signature: "class Copier"
import: "use msgpack::{Copier};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/28282558ca88aab4179bd52d695227e467bf08d3/src/msgpack.hy#L156"
order: 0
---

Holds both arenas so the recursive copy takes only an index. A [`Store`](/packages/msgpack/reference/msgpack/Store) parameter on a recursive method does not unify ([`Store`](/packages/msgpack/reference/msgpack/Store) vs [`msgpack::Store`](/packages/msgpack/reference/msgpack/Store)).

## Methods

| Name | Description |
|------|-------------|
| [`copy`](/packages/msgpack/reference/msgpack/Copier/copy) |  |

## See also

- [`msgpack::Store`](/packages/msgpack/reference/msgpack/Store)
- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): MessagePack value.
- [`Parser`](/packages/msgpack/reference/msgpack/Parser)
- [`Msgpack`](/packages/msgpack/reference/msgpack/Msgpack): MessagePack codec.

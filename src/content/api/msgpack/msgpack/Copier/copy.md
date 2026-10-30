---
slug: "msgpack/msgpack/Copier/copy"
package: "msgpack"
title: "Copier::copy"
description: "Method Copier::copy."
module: "msgpack"
kind: "method"
name: "copy"
parent: "Copier"
signature: "pub fn copy(int src_idx) -> int"
import: "use msgpack::{Copier};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/28282558ca88aab4179bd52d695227e467bf08d3/src/msgpack.hy#L163"
order: 0
---

*No documentation yet.*

Called on a `Copier` value as `value.copy(…)`.

## Parameters

| Name | Type |
|------|------|
| `src_idx` | `int` |

## Returns

`int`

## See also

- [`Copier`](/packages/msgpack/reference/msgpack/Copier): Holds both arenas so the recursive copy takes only an index.

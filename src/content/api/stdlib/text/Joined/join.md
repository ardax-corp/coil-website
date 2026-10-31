---
slug: "stdlib/text/Joined/join"
package: "stdlib"
title: "Joined::join"
description: "Returns the parts concatenated with sep between each pair."
module: "text"
kind: "method"
name: "join"
parent: "Joined"
signature: "fn join(V parts, string sep) -> string"
import: "use text::{Joined};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/text.hy#L969"
order: 0
---

Returns the parts concatenated with `sep` between each pair.

## Parameters

| Name | Type |
|------|------|
| `parts` | `V` |
| `sep` | `string` |

## Returns

`string`

## See also

- [`Joined`](/packages/stdlib/reference/text/Joined): `parts.join(sep)` on `Vec<string>`.

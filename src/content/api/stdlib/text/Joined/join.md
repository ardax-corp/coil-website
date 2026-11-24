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
source: "https://github.com/ardax-corp/coil-stdlib/blob/88dc9dc329c75d41081b17f35d2886415a2b7cd1/src/text.coil#L1014"
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

---
slug: "text/Joined/join"
title: "Joined::join"
description: "Returns the parts concatenated with sep between each pair."
module: "text"
kind: "method"
name: "join"
parent: "Joined"
signature: "fn join(V parts, string sep) -> string"
import: "use text::{Joined};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/a5615b7cd941dfa56fc0e1f42de4832c354630a3/src/text.hy#L969"
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

- [`Joined`](/docs/reference/text/Joined): `parts.join(sep)` on `Vec<string>`.

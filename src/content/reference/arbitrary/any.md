---
slug: "arbitrary/any"
title: "any"
description: "A random T, chosen by the expected type: let x: Vec<int> = any(g);."
module: "arbitrary"
kind: "fn"
name: "any"
signature: "fn any<T: Arbitrary>(Gen g) -> T"
import: "use arbitrary::{any};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/de4bf4dc9af36e25e72142d3d0ccd454fb0021a4/compiler/src/prelude/arbitrary.hy#L137"
order: 2
---

A random `T`, chosen by the expected type: `let x: Vec<int> = any(g);`.

## Parameters

| Name | Type |
|------|------|
| `g` | `Gen` |

## Returns

`T`

## Examples

```coil
use arbitrary::{any, Gen};
use tests::assert;
let g = Gen::new(1);
let xs: Vec<int> = any(g);
assert!(xs.len() <= g.size());
```

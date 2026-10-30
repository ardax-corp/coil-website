---
slug: "arbitrary/index"
title: "arbitrary"
description: "Random values for property tests: Gen, the Arbitrary trait and any."
module: "arbitrary"
kind: "module"
name: "arbitrary"
origin: "embedded"
auto: false
order: 18
---

`coil test` uses this module to call functions that have contracts with
generated inputs. Implement [`Arbitrary`](/docs/reference/arbitrary/Arbitrary) for your own types, or derive it with
`#[derive(Arbitrary)]` on classes and enums. A [`Gen`](/docs/reference/arbitrary/Gen) grows its `size` from 0,
so the first failing input it finds is a small one.

Written in Coil and shipped inside the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use arbitrary::{Gen, Arbitrary};
```

## Types

| Name | Description |
|------|-------------|
| [`Gen`](/docs/reference/arbitrary/Gen) | A seeded source of random values. |

## Traits

| Name | Description |
|------|-------------|
| [`Arbitrary`](/docs/reference/arbitrary/Arbitrary) | A type `coil test` can make values of. |

## Functions

| Name | Description |
|------|-------------|
| [`any`](/docs/reference/arbitrary/any) | A random `T`, chosen by the expected type: `let x: Vec<int> = any(g);`. |

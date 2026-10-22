---
slug: "collections/set/HashSet"
title: "HashSet"
description: "Set of unique values backed by HashMap<T, bool>."
module: "collections::set"
kind: "class"
name: "HashSet"
signature: "class HashSet<T>"
import: "use collections::set::{HashSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/collections/set.hy#L6"
order: 0
---

Set of unique values backed by `HashMap<T, bool>`.

## Associated functions

| Name | Description |
|------|-------------|
| [`with_capacity`](/docs/reference/collections/set/HashSet/with_capacity) | Create a set with bucket count rounded up to the next power of two (min 8). |
| [`new`](/docs/reference/collections/set/HashSet/new) | Empty set with default capacity 8. |

## Methods

| Name | Description |
|------|-------------|
| [`size`](/docs/reference/collections/set/HashSet/size) | Number of elements. |
| [`is_empty`](/docs/reference/collections/set/HashSet/is_empty) |  |
| [`clear`](/docs/reference/collections/set/HashSet/clear) | Remove all elements. |
| [`insert`](/docs/reference/collections/set/HashSet/insert) | Insert x; returns true when newly added. |
| [`contains`](/docs/reference/collections/set/HashSet/contains) | True when x is present. |
| [`remove`](/docs/reference/collections/set/HashSet/remove) | Remove x; returns true when an element was removed. |

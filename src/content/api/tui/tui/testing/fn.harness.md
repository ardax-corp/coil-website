---
slug: "tui/tui/testing/fn.harness"
package: "tui"
title: "harness"
description: "A harness running root in a cols by rows screen with colour off, drawn once already."
module: "tui::testing"
kind: "fn"
name: "harness"
signature: "fn harness(Node root, int cols, int rows) -> Harness"
import: "use tui::testing::{harness};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/611cfd9b4c061de7df4a8352a34580911bde46b9/src/tui/testing.coil#L171"
order: 2
---

A harness running `root` in a `cols` by `rows` screen with colour off, drawn once already.

## Parameters

| Name | Type |
|------|------|
| `root` | `Node` |
| `cols` | `int` |
| `rows` | `int` |

## Returns

`Harness`

## See also

- [`parse_key`](/packages/tui/reference/tui/testing/parse_key): The key event for a spec as `cli::keys::describe_key` writes it: `"ctrl+c"`, `"shift+tab"`, `"f5"`, `"space"`, `"a"`.

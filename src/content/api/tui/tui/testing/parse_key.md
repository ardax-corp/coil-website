---
slug: "tui/tui/testing/parse_key"
package: "tui"
title: "parse_key"
description: "The key event for a spec as cli::keys::describe_key writes it: \"ctrl+c\", \"shift+tab\", \"f5\", \"space\", \"a\". The plus key is \"+\", with modifiers \"ctrl++\". Panics on a name it does not know, so a typo fails the test."
module: "tui::testing"
kind: "fn"
name: "parse_key"
signature: "fn parse_key(string spec) -> Event"
import: "use tui::testing::{parse_key};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/0912e5a7bad70e7775e26db08f3f0efa46e1553f/src/tui/testing.coil#L95"
order: 1
---

The key event for a spec as [`cli::keys::describe_key`](/packages/cli/reference/cli/keys/describe_key) writes it: `"ctrl+c"`, `"shift+tab"`, `"f5"`, `"space"`, `"a"`. The plus key is `"+"`, with modifiers `"ctrl++"`. Panics on a name it does not know, so a typo fails the test.

## Parameters

| Name | Type |
|------|------|
| `spec` | `string` |

## Returns

`Event`

## See also

- [`cli::keys::describe_key`](/packages/cli/reference/cli/keys/describe_key)
- [`harness`](/packages/tui/reference/tui/testing/fn.harness): A harness running `root` in a `cols` by `rows` screen with colour off, drawn once already.

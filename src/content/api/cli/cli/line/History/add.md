---
slug: "cli/cli/line/History/add"
package: "cli"
title: "History::add"
description: "Add an entry; blanks and repeats of the last entry are skipped."
module: "cli::line"
kind: "method"
name: "add"
parent: "History"
signature: "pub fn add(string line)"
import: "use cli::line::{History};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/line.hy#L129"
order: 0
---

Add an entry; blanks and repeats of the last entry are skipped.

Called on a `History` value as `value.add(…)`.

## Parameters

| Name | Type |
|------|------|
| `line` | `string` |

## See also

- [`History`](/packages/cli/reference/cli/line/History)
- [`History::len`](/packages/cli/reference/cli/line/History/len)

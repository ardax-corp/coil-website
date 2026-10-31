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
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/line.hy#L154"
order: 0
---

Add an entry; blanks and repeats of the last entry are skipped.

Called on a `History` value as `value.add(…)`.

## Parameters

| Name | Type |
|------|------|
| `line` | `string` |

## See also

- [`History`](/packages/cli/reference/cli/line/History): Lines accepted so far, oldest first, shared between editors so a REPL can keep one history across prompts.
- [`History::len`](/packages/cli/reference/cli/line/History/len): Number of entries.

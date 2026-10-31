---
slug: "cli/cli/line/History/len"
package: "cli"
title: "History::len"
description: "Number of entries."
module: "cli::line"
kind: "method"
name: "len"
parent: "History"
signature: "pub fn len() -> int"
import: "use cli::line::{History};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/line.hy#L175"
order: 1
---

Number of entries.

Called on a `History` value as `value.len(…)`.

## Returns

`int`

## See also

- [`History`](/packages/cli/reference/cli/line/History): Lines accepted so far, oldest first, shared between editors so a REPL can keep one history across prompts.
- [`History::add`](/packages/cli/reference/cli/line/History/add): Add an entry; blanks and repeats of the last entry are skipped.

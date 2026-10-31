---
slug: "cli/cli/line/History"
package: "cli"
title: "History"
description: "Lines accepted so far, oldest first, shared between editors so a REPL can keep one history across prompts."
module: "cli::line"
kind: "class"
name: "History"
signature: "shared class History"
import: "use cli::line::{History};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/line.hy#L140"
order: 2
---

Lines accepted so far, oldest first, shared between editors so a REPL can keep one history across prompts.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `entries` | `Vec<string>` | The entries, oldest first. |
| `limit` | `int` | Most entries kept (oldest dropped first). |

## Methods

| Name | Description |
|------|-------------|
| [`add`](/packages/cli/reference/cli/line/History/add) | Add an entry; blanks and repeats of the last entry are skipped. |
| [`len`](/packages/cli/reference/cli/line/History/len) | Number of entries. |

## See also

- [`Editor`](/packages/cli/reference/cli/line/Editor): The line-editor model: a line of text with a cursor (in display units: a character plus its zero-width marks), a kill buffer and a `History`.

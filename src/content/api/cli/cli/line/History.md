---
slug: "cli/cli/line/History"
package: "cli"
title: "History"
description: "Class History."
module: "cli::line"
kind: "class"
name: "History"
signature: "shared class History"
import: "use cli::line::{History};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/line.hy#L117"
order: 1
---

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `entries` | `Vec<string>` |  |
| `limit` | `int` | Most entries kept (oldest dropped first). |

## Methods

| Name | Description |
|------|-------------|
| [`add`](/packages/cli/reference/cli/line/History/add) | Add an entry; blanks and repeats of the last entry are skipped. |
| [`len`](/packages/cli/reference/cli/line/History/len) |  |

## See also

- [`Editor`](/packages/cli/reference/cli/line/Editor)

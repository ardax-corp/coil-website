---
slug: "cli/cli/prompt/Select"
package: "cli"
title: "Select"
description: "A scrolling, filterable list. cursor and offset index the filtered list (visible)."
module: "cli::prompt"
kind: "class"
name: "Select"
signature: "class Select"
import: "use cli::prompt::{Select};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/prompt.hy#L100"
order: 0
---

A scrolling, filterable list. `cursor` and `offset` index the filtered list (`visible`).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `items` | `Vec<string>` |  |
| `multi` | `bool` |  |
| `checked` | `Vec<bool>` |  |
| `filter` | `string` |  |
| `visible` | `Vec<int>` |  |
| `cursor` | `int` |  |
| `offset` | `int` |  |
| `height` | `int` | Rows the list may use. |

## Methods

| Name | Description |
|------|-------------|
| [`current`](/packages/cli/reference/cli/prompt/Select/current) | Index into `items` under the cursor, or -1 when the filter hides everything. |
| [`chosen`](/packages/cli/reference/cli/prompt/Select/chosen) | Indices of the checked items (multi) or the current one (single). |
| [`apply`](/packages/cli/reference/cli/prompt/Select/apply) |  |
| [`lines`](/packages/cli/reference/cli/prompt/Select/lines) | The list rows to draw, each at most `cols` columns: a `❯` marker on the cursor row and `◉`/`○` boxes for multi-select. |

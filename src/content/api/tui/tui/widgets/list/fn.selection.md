---
slug: "tui/tui/widgets/list/fn.selection"
package: "tui"
title: "selection"
description: "A selection on the first row, scrolled to the top."
module: "tui::widgets::list"
kind: "fn"
name: "selection"
signature: "fn selection() -> Selection"
import: "use tui::widgets::list::{selection};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/list.hy#L35"
order: 4
---

A selection on the first row, scrolled to the top.

## Returns

`Selection`

## See also

- [`scrollbar`](/packages/tui/reference/tui/widgets/list/scrollbar): A vertical scrollbar in the last column of `cv` for `count` rows starting at `offset`, `h` shown.
- [`list`](/packages/tui/reference/tui/widgets/list/fn.list): A `List` of `items` (see `List::new`).
- [`table_column`](/packages/tui/reference/tui/widgets/list/table_column): A left-aligned column titled `title`, sized by `w`.

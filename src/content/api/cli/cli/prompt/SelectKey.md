---
slug: "cli/cli/prompt/SelectKey"
package: "cli"
title: "SelectKey"
description: "One action on a Select list, applied with Select.apply. select_key_for maps input events to these."
module: "cli::prompt"
kind: "enum"
name: "SelectKey"
signature: "enum SelectKey"
import: "use cli::prompt::{SelectKey};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/prompt.hy#L86"
order: 0
---

One action on a [`Select`](/packages/cli/reference/cli/prompt/Select) list, applied with [`Select.apply`](/packages/cli/reference/cli/prompt/Select/apply). [`select_key_for`](/packages/cli/reference/cli/prompt/select_key_for) maps input events to these.

## Variants

### `Up` {#variant-up}

Cursor up one row (wraps to the last).

### `Down` {#variant-down}

Cursor down one row (wraps to the first).

### `PageUp` {#variant-pageup}

Cursor up one page (`height` rows).

### `PageDown` {#variant-pagedown}

Cursor down one page.

### `Home` {#variant-home}

Cursor to the first row.

### `End` {#variant-end}

Cursor to the last row.

### `Toggle` {#variant-toggle}

Toggle the item under the cursor (multi-select).

### `ToggleAll` {#variant-toggleall}

Check every visible item, or uncheck them all when all are checked
(multi-select).

### `FilterChar(string)` {#variant-filterchar}

Type into the filter.

### `FilterBackspace` {#variant-filterbackspace}

Delete the last character of the filter.

### `Submit` {#variant-submit}

Accept the choice (single-select needs a visible item).

### `Cancel` {#variant-cancel}

Abandon the choice.

## See also

- [`cli::prompt::Select`](/packages/cli/reference/cli/prompt/Select)
- [`Select::apply`](/packages/cli/reference/cli/prompt/Select/apply)
- [`cli::prompt::select_key_for`](/packages/cli/reference/cli/prompt/select_key_for)
- [`SelectOutcome`](/packages/cli/reference/cli/prompt/SelectOutcome): What the caller should do after `Select.apply`.

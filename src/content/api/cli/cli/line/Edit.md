---
slug: "cli/cli/line/Edit"
package: "cli"
title: "Edit"
description: "Enum Edit."
module: "cli::line"
kind: "enum"
name: "Edit"
signature: "enum Edit"
import: "use cli::line::{Edit};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/line.hy#L30"
order: 8
---

## Variants

### `Insert(string)` {#variant-insert}

Insert text at the cursor (typed characters or a paste).

### `Left` {#variant-left}

### `Right` {#variant-right}

### `Home` {#variant-home}

### `End` {#variant-end}

### `WordLeft` {#variant-wordleft}

### `WordRight` {#variant-wordright}

### `Backspace` {#variant-backspace}

Delete the character before / under the cursor.

### `Delete` {#variant-delete}

### `KillWordBack` {#variant-killwordback}

Delete the word before / after the cursor into the kill buffer.

### `KillWordForward` {#variant-killwordforward}

### `KillToEnd` {#variant-killtoend}

Delete to the end / start of the line into the kill buffer.

### `KillToStart` {#variant-killtostart}

### `Yank` {#variant-yank}

Insert the kill buffer.

### `Transpose` {#variant-transpose}

Swap the two characters around the cursor.

### `HistoryPrev` {#variant-historyprev}

### `HistoryNext` {#variant-historynext}

### `Submit` {#variant-submit}

Accept the line.

### `Cancel` {#variant-cancel}

Abandon the line (Ctrl-C).

### `Eof` {#variant-eof}

End of input on an empty line (Ctrl-D).

### `Clear` {#variant-clear}

## See also

- [`Outcome`](/packages/cli/reference/cli/line/Outcome): What the caller should do after an action.
- [`LineInput`](/packages/cli/reference/cli/line/LineInput): What `read_line` got.

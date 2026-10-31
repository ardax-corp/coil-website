---
slug: "cli/cli/line/Edit"
package: "cli"
title: "Edit"
description: "One line-editor action, applied with Editor.apply. edit_for maps input events to these with readline-style bindings; a program can map its own keys instead."
module: "cli::line"
kind: "enum"
name: "Edit"
signature: "enum Edit"
import: "use cli::line::{Edit};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/line.hy#L33"
order: 0
---

One line-editor action, applied with [`Editor.apply`](/packages/cli/reference/cli/line/Editor/apply). [`edit_for`](/packages/cli/reference/cli/line/edit_for) maps input events to these with readline-style bindings; a program can map its own keys instead.

## Variants

### `Insert(string)` {#variant-insert}

Insert text at the cursor (typed characters or a paste).

### `Left` {#variant-left}

Move the cursor one character left.

### `Right` {#variant-right}

Move the cursor one character right.

### `Home` {#variant-home}

Move the cursor to the start of the line.

### `End` {#variant-end}

Move the cursor to the end of the line.

### `WordLeft` {#variant-wordleft}

Move the cursor to the start of the word before it.

### `WordRight` {#variant-wordright}

Move the cursor past the end of the word after it.

### `Backspace` {#variant-backspace}

Delete the character before the cursor.

### `Delete` {#variant-delete}

Delete the character under the cursor.

### `KillWordBack` {#variant-killwordback}

Delete the word before the cursor into the kill buffer.

### `KillWordForward` {#variant-killwordforward}

Delete the word after the cursor into the kill buffer.

### `KillToEnd` {#variant-killtoend}

Delete to the end of the line into the kill buffer.

### `KillToStart` {#variant-killtostart}

Delete to the start of the line into the kill buffer.

### `Yank` {#variant-yank}

Insert the kill buffer.

### `Transpose` {#variant-transpose}

Swap the two characters around the cursor.

### `HistoryPrev` {#variant-historyprev}

Show the previous (older) history entry; the line being typed is kept
as a draft.

### `HistoryNext` {#variant-historynext}

Show the next (newer) history entry, or the draft after the newest.

### `Submit` {#variant-submit}

Accept the line.

### `Cancel` {#variant-cancel}

Abandon the line (Ctrl-C).

### `Eof` {#variant-eof}

End of input on an empty line (Ctrl-D); on a non-empty line it
deletes the character under the cursor instead.

### `Clear` {#variant-clear}

Empty the line.

## See also

- [`Editor::apply`](/packages/cli/reference/cli/line/Editor/apply)
- [`cli::line::edit_for`](/packages/cli/reference/cli/line/edit_for)
- [`Outcome`](/packages/cli/reference/cli/line/Outcome): What the caller should do after an action.
- [`LineInput`](/packages/cli/reference/cli/line/LineInput): What `read_line` got.

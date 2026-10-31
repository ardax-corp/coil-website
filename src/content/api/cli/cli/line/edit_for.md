---
slug: "cli/cli/line/edit_for"
package: "cli"
title: "edit_for"
description: "The default (Emacs / readline-style) binding for an input event, or None when it means nothing to the editor. Pastes insert their text."
module: "cli::line"
kind: "fn"
name: "edit_for"
signature: "fn edit_for(Event e) -> Option<Edit>"
import: "use cli::line::{edit_for};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/line.hy#L497"
order: 8
---

The default (Emacs / readline-style) binding for an input event, or `None` when it means nothing to the editor. Pastes insert their text.

Typed characters insert; Enter submits; Ctrl-C and Esc cancel; Ctrl-D
is `Eof`; arrows, Home/End, Ctrl-A/E/B/F and Alt-B/F move; Backspace,
Delete, Ctrl-W, Alt-D, Ctrl-K and Ctrl-U delete; Ctrl-Y yanks; Ctrl-T
transposes; Up/Down and Ctrl-P/N browse history; Ctrl-L clears.

## Parameters

| Name | Type |
|------|------|
| `e` | `Event` |

## Returns

`Option<Edit>`

## Examples

```coil
use cli::line::{Edit, edit_for};
use cli::keys::{Key, CTRL, key};
use tests::assert;
let e = edit_for(key(Key::Char(107), CTRL));
let is_kill = match e {
    Option::Some(Edit::KillToEnd) => true,
    default => false,
};
assert!(is_kill);
```

## See also

- [`units`](/packages/cli/reference/cli/line/units): `s` split into display units: one character plus any zero-width marks.
- [`history`](/packages/cli/reference/cli/line/fn.history): An empty history keeping at most `limit` entries.
- [`editor`](/packages/cli/reference/cli/line/fn.editor): An empty editor over history `h`.
- [`read_line_masked`](/packages/cli/reference/cli/line/read_line_masked): Read a line with `prompt`, editing it in raw mode (Emacs keys, history, paste) with each character shown as `mask` when it is not "".
- [`read_line`](/packages/cli/reference/cli/line/read_line): `read_line_masked` with the text shown.

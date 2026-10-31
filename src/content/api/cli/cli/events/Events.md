---
slug: "cli/cli/events/Events"
package: "cli"
title: "Events"
description: "A source of decoded input events (cli::keys::Event): keys, mouse, paste, focus and Resize. Make one with events (stdin) or events_from, then call next with a timeout."
module: "cli::events"
kind: "class"
name: "Events"
signature: "class Events"
import: "use cli::events::{Events};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/events.hy#L46"
order: 0
---

A source of decoded input events ([`cli::keys::Event`](/packages/cli/reference/cli/keys/Event)): keys, mouse, paste, focus and `Resize`. Make one with [`events`](/packages/cli/reference/cli/events/fn.events) (stdin) or [`events_from`](/packages/cli/reference/cli/events/events_from), then call [`next`](/packages/cli/reference/cli/events/Events/next) with a timeout.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `input` | `Stream` | Where bytes come from (a raw-mode terminal, or any stream). |
| `output` | `Stream` | Whose size a resize reports. |
| `esc_ms` | `int` | How long a lone Esc waits for the rest of a sequence (ms); starts at [`ESC_TIMEOUT_MS`](/packages/cli/reference/cli/events/ESC_TIMEOUT_MS). |
| `eof` | `bool` | The input ended; [`next`](/packages/cli/reference/cli/events/Events/next) returns `None` from now on. |

## Methods

| Name | Description |
|------|-------------|
| [`expect_cursor`](/packages/cli/reference/cli/events/Events/expect_cursor) | Expect a cursor position report next (after writing [`cli::ansi::query_cursor()`](/packages/cli/reference/cli/ansi/query_cursor)). |
| [`next`](/packages/cli/reference/cli/events/Events/next) | The next event, waiting up to `timeout_ms` (negative: for ever). |
| [`poll`](/packages/cli/reference/cli/events/Events/poll) | Every event available now, without waiting. |

## Examples

```coil
use cli::events::events;
use cli::keys::describe;
use cli::term::raw_mode;
use io::stdin;
use io::tty::TtyError;
fn main() -> Result<(), TtyError> {
    let raw = raw_mode(stdin())?;
    let ev = events();
    while let Option::Some(e) = ev.next(-1)? {
        if describe(e) == "ctrl+c" {
            break;
        }
    }
    raw.leave()?;
    return;
}
```

## See also

- [`cli::keys::Event`](/packages/cli/reference/cli/keys/Event)
- [`cli::events::events`](/packages/cli/reference/cli/events/fn.events)
- [`cli::events::events_from`](/packages/cli/reference/cli/events/events_from)
- [`Events::next`](/packages/cli/reference/cli/events/Events/next)
- [`cli::events::ESC_TIMEOUT_MS`](/packages/cli/reference/cli/events/ESC_TIMEOUT_MS)

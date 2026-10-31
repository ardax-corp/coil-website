---
slug: "cli/cli/events/Events/next"
package: "cli"
title: "Events::next"
description: "The next event, waiting up to timeout_ms (negative: for ever). None when the time passed with nothing to report, or at the end of input (then eof is set)."
module: "cli::events"
kind: "method"
name: "next"
parent: "Events"
signature: "pub fn next(int timeout_ms) -> Result<Option<Event>, TtyError>"
import: "use cli::events::{Events};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/events.coil#L107"
order: 1
---

The next event, waiting up to `timeout_ms` (negative: for ever). `None` when the time passed with nothing to report, or at the end of input (then `eof` is set).

Called on a `Events` value as `value.next(…)`.

## Parameters

| Name | Type |
|------|------|
| `timeout_ms` | `int` |

## Returns

`Result<Option<Event>, TtyError>`

## See also

- [`Events`](/packages/cli/reference/cli/events/Events): A source of decoded input events (`cli::keys::Event`): keys, mouse, paste, focus and `Resize`.
- [`Events::expect_cursor`](/packages/cli/reference/cli/events/Events/expect_cursor): Expect a cursor position report next (after writing `cli::ansi::query_cursor()`).
- [`Events::poll`](/packages/cli/reference/cli/events/Events/poll): Every event available now, without waiting.

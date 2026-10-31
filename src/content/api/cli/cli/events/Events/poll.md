---
slug: "cli/cli/events/Events/poll"
package: "cli"
title: "Events::poll"
description: "Every event available now, without waiting."
module: "cli::events"
kind: "method"
name: "poll"
parent: "Events"
signature: "pub fn poll() -> Result<Vec<Event>, TtyError>"
import: "use cli::events::{Events};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/events.hy#L157"
order: 2
---

Every event available now, without waiting.

Called on a `Events` value as `value.poll(…)`.

## Returns

`Result<Vec<Event>, TtyError>`

## See also

- [`Events`](/packages/cli/reference/cli/events/Events): A source of decoded input events (`cli::keys::Event`): keys, mouse, paste, focus and `Resize`.
- [`Events::expect_cursor`](/packages/cli/reference/cli/events/Events/expect_cursor): Expect a cursor position report next (after writing `cli::ansi::query_cursor()`).
- [`Events::next`](/packages/cli/reference/cli/events/Events/next): The next event, waiting up to `timeout_ms` (negative: for ever).

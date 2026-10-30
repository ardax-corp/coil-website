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
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/events.hy#L130"
order: 2
---

Every event available now, without waiting.

Called on a `Events` value as `value.poll(…)`.

## Returns

`Result<Vec<Event>, TtyError>`

## See also

- [`Events`](/packages/cli/reference/cli/events/Events)
- [`Events::expect_cursor`](/packages/cli/reference/cli/events/Events/expect_cursor): Expect a cursor position report next (after writing `cli::ansi::query_cursor()`).
- [`Events::next`](/packages/cli/reference/cli/events/Events/next): The next event, waiting up to `timeout_ms` (negative: for ever).

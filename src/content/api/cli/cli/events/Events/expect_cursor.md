---
slug: "cli/cli/events/Events/expect_cursor"
package: "cli"
title: "Events::expect_cursor"
description: "Expect a cursor position report next (after writing cli::ansi::query_cursor())."
module: "cli::events"
kind: "method"
name: "expect_cursor"
parent: "Events"
signature: "pub fn expect_cursor()"
import: "use cli::events::{Events};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/events.coil#L79"
order: 0
---

Expect a cursor position report next (after writing [`cli::ansi::query_cursor()`](/packages/cli/reference/cli/ansi/query_cursor)).

Called on a `Events` value as `value.expect_cursor(…)`.

## See also

- [`cli::ansi::query_cursor`](/packages/cli/reference/cli/ansi/query_cursor)
- [`Events`](/packages/cli/reference/cli/events/Events): A source of decoded input events (`cli::keys::Event`): keys, mouse, paste, focus and `Resize`.
- [`Events::next`](/packages/cli/reference/cli/events/Events/next): The next event, waiting up to `timeout_ms` (negative: for ever).
- [`Events::poll`](/packages/cli/reference/cli/events/Events/poll): Every event available now, without waiting.

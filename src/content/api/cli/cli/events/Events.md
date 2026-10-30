---
slug: "cli/cli/events/Events"
package: "cli"
title: "Events"
description: "Class Events."
module: "cli::events"
kind: "class"
name: "Events"
signature: "class Events"
import: "use cli::events::{Events};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/events.hy#L21"
order: 0
---

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `input` | `Stream` | Where bytes come from (a raw-mode terminal, or any stream). |
| `output` | `Stream` | Whose size a resize reports. |
| `esc_ms` | `int` |  |
| `eof` | `bool` | The input ended; [`next`](/packages/cli/reference/cli/events/Events/next) returns `None` from now on. |

## Methods

| Name | Description |
|------|-------------|
| [`expect_cursor`](/packages/cli/reference/cli/events/Events/expect_cursor) | Expect a cursor position report next (after writing [`cli::ansi::query_cursor()`](/packages/cli/reference/cli/ansi/query_cursor)). |
| [`next`](/packages/cli/reference/cli/events/Events/next) | The next event, waiting up to `timeout_ms` (negative: for ever). |
| [`poll`](/packages/cli/reference/cli/events/Events/poll) | Every event available now, without waiting. |

## See also

- [`Events::next`](/packages/cli/reference/cli/events/Events/next)

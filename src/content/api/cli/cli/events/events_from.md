---
slug: "cli/cli/events/events_from"
package: "cli"
title: "events_from"
description: "Events from input; resizes report the size of output's terminal."
module: "cli::events"
kind: "fn"
name: "events_from"
signature: "fn events_from(Stream input, Stream output) -> Events"
import: "use cli::events::{events_from};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/events.hy#L61"
order: 2
---

Events from `input`; resizes report the size of `output`'s terminal.

## Parameters

| Name | Type |
|------|------|
| `input` | `Stream` |
| `output` | `Stream` |

## Returns

`Events`

## See also

- [`events`](/packages/cli/reference/cli/events/fn.events): Events from stdin, resizes measured on stdout.

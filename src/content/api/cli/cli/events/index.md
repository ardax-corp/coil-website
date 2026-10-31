---
slug: "cli/cli/events/index"
package: "cli"
title: "cli::events"
description: "Terminal input events: timed reads decoded into keys, mouse, paste and resize events."
module: "cli::events"
kind: "module"
name: "cli::events"
origin: "package"
auto: false
order: 3
---

Part of the [cli](/packages/cli) package ([coil-cli](https://github.com/ardax-corp/coil-cli)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/cli)).

Import what you use (`use path::*` is not allowed):

```coil
use cli::events::{Events, ESC_TIMEOUT_MS};
```

## Types

| Name | Description |
|------|-------------|
| [`Events`](/packages/cli/reference/cli/events/Events) | A source of decoded input events ([`cli::keys::Event`](/packages/cli/reference/cli/keys/Event)): keys, mouse, paste, focus and `Resize`. |

## Constants

| Name | Description |
|------|-------------|
| [`ESC_TIMEOUT_MS`](/packages/cli/reference/cli/events/ESC_TIMEOUT_MS) | How long a lone Esc waits for the rest of a sequence (ms). |

## Functions

| Name | Description |
|------|-------------|
| [`events_from`](/packages/cli/reference/cli/events/events_from) | Events from `input`; resizes report the size of `output`'s terminal. |
| [`events`](/packages/cli/reference/cli/events/fn.events) | Events from stdin, resizes measured on stdout. |

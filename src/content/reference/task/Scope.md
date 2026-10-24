---
slug: "task/Scope"
title: "Scope"
description: "A running scope, used to start child tasks with spawn."
module: "task"
kind: "class"
name: "Scope"
signature: "class Scope"
import: "use task::{Scope};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/62e75718cb75a68f2a80f051fe8180e7a5f6cde9/compiler/src/prelude/task.hy#L51"
order: 1
---

A running [`scope`](/docs/reference/task/fn.scope), used to start child tasks with [`spawn`](/docs/reference/task/Scope/spawn).

A `Scope` only exists inside the body passed to [`scope`](/docs/reference/task/fn.scope), and every task it
starts has finished by the time [`scope`](/docs/reference/task/fn.scope) returns.

## Methods

| Name | Description |
|------|-------------|
| [`spawn`](/docs/reference/task/Scope/spawn) | Starts `body` as a child task of this scope and returns its handle. |

## See also

- [`task::scope`](/docs/reference/task/fn.scope)
- [`Scope::spawn`](/docs/reference/task/Scope/spawn)
- [`Task`](/docs/reference/task/Task): A handle to a child task started with `Scope::spawn`.
- [`Channel`](/docs/reference/task/Channel): A bounded queue for passing values between tasks.

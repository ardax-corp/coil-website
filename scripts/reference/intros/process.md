---
description: "Run other programs: exit codes, captured output, pipes as streams, environment, working directory and signals."
---
`exec(program, argv)` runs a program, waits for it and returns its exit code.
For anything more, build a `Command`: add arguments, environment and a working
directory, choose what happens to each of stdin, stdout and stderr, then
`status`, `output` (captures stdout and stderr as strings) or `spawn` (a
`Child` you can write to, read from, wait on and signal). Piped streams are
ordinary [`io::Stream`](/docs/reference/io)s.

Arguments go to the program as they are, with no shell in between. A child
that a signal ends reports `128 + signal` as its status. `wait` blocks the
thread it runs on; inside a task, run it under `task::blocking`.

Starting a program needs `--allow-exec` (error `E0406`); see
[Permissions](/docs/language/permissions). Signals are Unix only: on Windows
`signal` returns `Err(ProcessError::Io(IoError::InvalidInput))`. The wasm
playground cannot start programs.

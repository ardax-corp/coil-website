---
description: "Terminals: is a stream a terminal, its size, raw mode, a key read with a timeout, resize notices."
---
These work on any `Stream` and need no permission flag, like printing and
reading `stdin`. On a file, pipe or socket they report "not a terminal":
`is_tty` is `false` and `size` / `enter_raw` return
`Err(TtyError::NotATerminal)`. A failure of the stream itself is
`TtyError::Io(IoError)`.

Raw mode belongs to the terminal, and the program puts it back: whatever is
still raw is restored when the program ends normally, through `env::exit`,
on an uncaught panic, and on Ctrl-C / SIGTERM / SIGHUP. On Windows the same
calls use the console API; `enable_vt` turns on ANSI escapes there.

Under `coil test` the standard streams are usually not terminals, and
stdout / stderr inside `io::capture_begin()` never are.

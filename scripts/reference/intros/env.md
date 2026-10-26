---
description: "Command-line arguments, environment variables, working directory and exit."
---
`args` and `cwd` need no grant. Reading or changing variables and `set_cwd`
need `--allow-env`, and `exit` needs `--allow-exit`; see
[Permissions](/docs/language/permissions). To run another program, use the
[coil-process](https://github.com/ardax-corp/coil-process) package: `process::exec(program, argv)`
waits for it and returns its exit code, and `command` adds pipes, captured
output, environment and working directory.

---
description: "Command-line arguments, environment variables, working directory, exit and exec."
---
`args` and `cwd` need no grant. Reading or changing variables and `set_cwd`
need `--allow-env`, `exec` needs `--allow-exec` and `exit` needs
`--allow-exit`; see [Permissions](/docs/language/permissions). `exec` runs a
program with an argument vector, without a shell, in the current working
directory and environment.

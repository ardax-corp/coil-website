---
title: "`env` module"
description: "use env::{args, var, cwd, exit, exec}; — args() returns Result<Vec<string>, EnvError> (Ok with argv including argv0). var / setvar / removevar, cwd / setcwd, exit(code).…"
---

# `env` module

`use env::{args, var, cwd, exit, exec};` — `args()` returns `Result<Vec<string>, EnvError>` (`Ok` with argv including argv0). `var` / `set_var` / `remove_var`, `cwd` / `set_cwd`, `exit(code)`. `exec(program, args)` spawns a program with an argv vector (no shell). The child inherits the VM process **cwd** and **environment**; there are no per-call overrides yet. Each call needs a grant when the program reaches it: `var`, `set_var`, `remove_var` and `set_cwd` need `--allow-env`, `exec` needs `--allow-exec` and `exit` needs `--allow-exit`. `args` and `cwd` need none. See [Permissions](/docs/references/permissions).

---

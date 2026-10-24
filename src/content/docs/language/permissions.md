---
title: "Permissions: `--allow-read` and friends"
description: "A program gets no file, network, environment or process access unless the build grants it. The compiler checks every host call main or a test can reach, and names the flag to add…"
---

# Permissions

A Coil program gets no access to files, the network, environment variables or
other processes unless its build grants it. The grant is a compiler flag, and
the compiler checks it: every host call that `main` or a test can reach must
be covered, or the build fails with the flag to add.

```
$ coil load.hy
Error: [E0414] `io::open` requires `--allow-read`: reached from `main` → `load`
Help: pass `--allow-read` (or `-A` for everything)

$ coil --allow-read load.hy
```

## Capabilities

| Flag | Grants | Calls |
|------|--------|-------|
| `--allow-read` | Read files and inspect the file system | `io::open` for reading, `io::fs::exists` / `is_file` / `is_dir` / `is_symlink` / `metadata` / `read_link` / `list_dir` / `realpath`, `io::fs::copy` |
| `--allow-write` | Create, change and remove files | `io::open` for writing, `io::fs::create_dir` / `create_dir_all` / `remove_file` / `remove_dir` / `remove_dir_all` / `rename` / `symlink`, `io::fs::copy` |
| `--allow-net` | Open sockets | `io::net::tcp::connect` / `connect_timeout` / `listen`, `io::net::udp::bind` / `connect` / `send_to` |
| `--allow-env` | Environment variables and the working directory | `env::var` / `set_var` / `remove_var` / `set_cwd` |
| `--allow-exec` | Run other programs | `env::exec` (error `E0406`) |
| `--allow-exit` | End the process early | `env::exit` (error `E0407`) |
| `--allow-attach` | Hand a raw descriptor to a stream | `Stream.attach` (error `E0408`) |
| `--allow-ffi-exec` | Process-exec symbols through FFI | `system`, `execve`, … |
| `-A`, `--allow-all` | All of the above | |

Read, write, net and env report `E0414`. `dload` is separate: each library
needs `--allow-dload STEM` (see [FFI](/docs/reference/ffi)), and `-A` does
not grant it. At run time the stem also needs `--dload-pin STEM=SHA256` or
`--dload-trusted STEM`, or the load is denied.

`io::open` needs what its mode needs when the mode is a string literal:
`"r"` needs read; `"w"` and `"a"` need write; `"rw"` needs both. A mode
computed at run time needs both. Any other mode is `Err(IoError::InvalidInput)`.

Stream IO on something already open (`read_to_end`, `write_all`, a socket's
`send`) needs no flag: the grant is checked where the file or socket is
opened. The terminal calls in [`io::tty`](/docs/reference/io/tty)
(`is_tty`, `size`, raw mode, `read_timeout`) need none either.

## What counts

Only calls the program can reach count. The compiler follows calls from
`main`, from each `test("…")` case under `coil test`, and from static
initializers. Importing a module that has an `env::exec` helper you never
call needs no grant. When a call is reached, the error names the chain of
functions that reaches it, so you can see why.

A library build with no `main` and no tests needs no grants. Its users grant
what their programs reach.

Macros never get host access: a host call inside a macro fails when the macro
runs, whatever the flags.

## The compiled program is the grant

Flags are read when the program is compiled. `coil run out.hyc` and packaged
executables run what was compiled and do not take the flags again. Grants are
not recorded in the archive and `coil` does not read them from `coil.toml`.
The `dload` pins and trusted stems are the exception: they are checked when
the library loads, so `coil run out.hyc` takes `--dload-pin` /
`--dload-trusted`; a packaged executable uses the hashes in its embedded
native lock.

## In a spool project

spool reads `[permissions]` from `coil.toml` and passes the flags to every
`coil` command it runs (`spool run`, `spool test`, `spool build`, the editor server):

```toml
[permissions]
read = true
write = true
net = true
# env, exec, exit, attach: also true / false
# all = true   # everything, like -A
```

A key left out is denied. spool also passes `[ffi] allow`, the `coil.lock`
native pins and `trusted` deps as `--allow-dload`, `--dload-pin` and
`--dload-trusted`. See [Project configuration](/docs/language/project-config#permissions).

## Related

- [Error codes](/docs/language/error-codes)
- [Compile-time code](/docs/language/comptime#io): the `--comptime-*` grants for code that runs while compiling
- [Effects](/docs/language/effects): what a function does, inferred and declared
- [env](/docs/reference/env), [io::fs](/docs/reference/io/fs), [io](/docs/reference/io)

---
title: Chapter 10 — Files and input/output
description: "Printing, reading standard input line by line, reading and writing files, directories, environment variables and command-line arguments, and the permission flags that guard them."
---

# Chapter 10 — Files and input/output

This chapter covers how a program talks to the outside world: the terminal,
files, directories, environment variables and command-line arguments. All
of it can fail, so every function here returns a `Result`, and a program
needs permission before it can touch files or the environment at all.

## Permissions

A Coil program cannot read files, write files, use the network, read
environment variables or start processes unless you allow it when you run
it. The compiler works out what the program can reach and stops with a
clear message when a flag is missing:

```text
Error: [E0414] `io::open` requires `--allow-read`: reached from `main` → `io::file::read_text` → `io::file::read_bytes`
    Help: pass `--allow-read` (or `-A` for everything)
```

The flags are `--allow-read`, `--allow-write`, `--allow-net`,
`--allow-env`, `--allow-exec` and `--allow-exit`; `-A` allows them all. In a
spool project, list them in `coil.toml` under `[permissions]`. Printing and
reading standard input need no permission. The details are on the
[permissions page](/docs/language/permissions).

The examples in this chapter need `-A` (or the specific flags):

```bash
coil --root ~/.coil/stdlib/src -A example.hy
```

## The terminal

[`io::sync`](/docs/reference/io/sync) has `println`, `print` (no newline)
and `eprintln` (to standard error, for messages that are not part of the
output). `read_line` reads one line from a stream, without the line ending,
and returns `None` at the end of input:

```coil
use io::{stdin};
use io::sync::{println, read_line};
use string::{format};

fn main() {
    let input = stdin();
    let count = 0;
    while let Some(line) = read_line(input)? {
        count++;
        println(format("%i: %s", count, line))?;
    }
    println(format("%i lines", count))?;
}
```

Run it with input piped in, `printf 'a\nb\n' | coil … number.hy`:

```text
1: a
2: b
2 lines
```

### Raw keys and the window size

[`io::tty`](/docs/reference/io/tty) talks to the terminal itself: whether a
stream is one (`is_tty`, to decide on colours or a progress bar), its size
as `(columns, rows)`, and raw mode, where keys arrive one at a time without
echo or Enter. `read_timeout` waits for input up to a number of
milliseconds, which is how a program tells a lone Esc from the start of an
arrow key's escape sequence. No flag is needed.

```coil no_run
use io::{stdin, stdout, IoError};
use io::sync::{println};
use io::tty::{enter_raw, is_tty, leave_raw, read_timeout, size, TtyError};
use string::{format, to_bytes};

// The terminal calls fail with `TtyError`; a plain write fails with
// `IoError`, which `TtyError::Io` wraps.
fn say(string line) -> Result<(), TtyError> {
    println(line).map_err(fn (IoError e) => TtyError::Io(e))?;
    return;
}

fn main() -> Result<(), TtyError> {
    let input = stdin();
    if !is_tty(input) {
        say("not a terminal")?;
        return;
    }
    let (cols, rows) = size(stdout())?;
    say(format("%i x %i, press a key", cols, rows))?;
    enter_raw(input, true, true)?;
    let buf = to_bytes("        ");
    let got = read_timeout(input, buf, 5000)?;
    leave_raw(input)?;
    match got {
        Option::Some(0) => say("no key within 5 s")?,
        Option::Some(n) => say(format("%i byte(s), first %i", n, buf[0] as int))?,
        Option::None => say("end of input")?,
    }
}
```

`TtyError::NotATerminal` is what `size` and `enter_raw` return on a file,
pipe or socket.

`keep_signals` (the first `true`) keeps Ctrl-C working; `keep_output` keeps
`"\n"` moving to the start of the next line. If the program ends while
still raw, the terminal is restored for it. `resized()` reports a window
resize once; a `read_timeout` that is waiting returns `Some(0)` when it
happens.

## Reading and writing files

For whole files, [`io::file`](/docs/reference/io/file) has one-call
functions:

```coil
use io::sync::{println};
use io::file::{read_text, write_text, append_text};
use text::{Text};
use string::{format};

fn main() {
    write_text("todo.txt", "buy milk\n")?;
    append_text("todo.txt", "call Ada\n")?;

    let body = read_text("todo.txt")?;
    let todo = body.lines();
    println(format("%i things to do, first: %s", todo.len(), todo[0]))?;
}
```

Output:

```text
2 things to do, first: buy milk
```

`lines` splits at each line ending. The newline at the end of the file
finishes the last line; it does not add an empty one.

`write_text` replaces the file, `append_text` adds to its end, and both
create it when it does not exist. `read_bytes` and `write_bytes` do the
same with raw bytes (`Vec<byte>`).

When a file cannot be opened, the `Result` holds an
[`IoError`](/docs/reference/io/IoError) such as `NotFound` or
`PermissionDenied`, which you can `match` on:

```coil
use io::sync::{println};
use io::file::{read_text};

fn main() {
    match read_text("settings.conf") {
        Ok(text) => {
            println(text)?;
        },
        Err(IoError::NotFound) => {
            println("no settings file, using defaults")?;
        },
        Err(e) => {
            println("cannot read settings: " + show(e))?;
        },
    }
}
```

Output:

```text
no settings file, using defaults
```

## Streams

For large files, or when you want to read and write piece by piece, open a
[`Stream`](/docs/reference/io/Stream) with `io::open` and a mode (`"r"`,
`"w"`, `"a"`, …). `io::sync` has helpers that wait until the work is done:

```coil
use io::{open, close};
use io::sync::{println, write_all, read_to_end};
use string::{to_bytes, from_bytes};

fn main() {
    let out = open("log.txt", "w")?;
    defer use (out) {
        let _ = close(out);
    }
    write_all(out, to_bytes("started\n"))?;
    write_all(out, to_bytes("finished\n"))?;
}
```

`defer` makes sure the file is closed however the function returns. Reading
works the same way with `read_to_end`, `read_exact` or `read_line`.

## Directories

[`io::fs`](/docs/reference/io/fs) works with paths: `exists`, `is_dir`,
`list_dir`, `create_dir_all`, `rename`, `copy`, `remove_file`,
`remove_dir_all` and more:

```coil
use io::sync::{println};
use io::fs::{create_dir_all, list_dir, remove_dir_all};
use io::file::{write_text};

fn main() {
    create_dir_all("reports/2026")?;
    write_text("reports/2026/jan.txt", "…")?;
    write_text("reports/2026/feb.txt", "…")?;
    for name in list_dir("reports/2026")? {
        println(name)?;
    }
    remove_dir_all("reports")?;
}
```

Output:

```text
feb.txt
jan.txt
```

The stdlib's [`Path`](/docs/reference/path/Path) class wraps a path string
with methods such as `join`, `dirname`, `basename` and `extension`.

## Arguments and environment

[`env`](/docs/reference/env) gives you the command-line arguments,
environment variables, the working directory and the exit status:

```coil no_run
use io::sync::{println, eprintln};
use env::{args, var, exit};

fn main() {
    let argv = args().unwrap_or(Vec::new());
    if argv.len() < 2 {
        eprintln("usage: greet NAME")?;
        exit(2);
    }
    let greeting = var("GREETING").unwrap_or("Hello");
    println(greeting + ", " + argv[1])?;
}
```

`args()` starts with the program's own name. Pass arguments to a spool
project with `spool run -- Ada`, or build an executable with
`coil package` and run that. `exit` needs `--allow-exit` and `var` needs
`--allow-env`.

## Networking

TCP and UDP sockets are in [`io::net`](/docs/reference/io/net). A server
usually handles many connections at once, which is what tasks are for:
chapter 13 builds a small concurrent server. For HTTP, TLS and other
protocols, see the [packages](/packages).

## Henry's challenges

> [!henry]
> A nautilus only opens its shell to what it trusts, and a Coil program
> only reaches the outside world with your permission. Bring `-A` (or
> the exact flags) to these.

1. Write a program that counts the lines, words and bytes of a file, like
   `wc`. Try it on a file with two spaces between some words, and compare
   with `wc` itself.

   > [!hint]
   > `line.split(" ")` turns two spaces into an empty word between them.
   > Count only the pieces that are not `""`. The byte count is the
   > string's `len()`.

   ```coil challenge=c10-1
   use io::sync::{println};
   use io::file::{read_text};
   use text::{Searchable, Text};
   use string::{format};

   fn main() {
       let body = read_text("poem.txt")?;
       let lines = 0;
       let words = 0;
       let bytes = 0;
       // Count them.
       println(format("%i lines, %i words, %i bytes", lines, words, bytes))?;
   }
   ```

   ```text challenge=c10-1 file=poem.txt
   The chambered  nautilus
   spirals out,  one room
   at a time.
   ```

   ```text expect=c10-1
   3 lines, 10 words, 58 bytes
   ```

2. Read numbers from standard input, one per line, and print their sum.
   Skip lines that are not numbers (`conv::parse_int`) and report how many
   were skipped on standard error.

   > [!hint]
   > Matching on `parse_int(line)` gives you an `Ok(n)` to add and an
   > `Err(_)` to count. An empty line is not a number either.

   ```coil challenge=c10-2
   use io::{stdin};
   use io::sync::{println, eprintln, read_line};
   use conv::{parse_int};
   use string::{format};

   fn main() {
       let input = stdin();
       let total = 0;
       while let Some(line) = read_line(input)? {
           // Add the numbers; count the lines that are not numbers.
       }
       println(format("%i", total))?;
   }
   ```

   ```text challenge=c10-2 stdin
   10
   20
   twelve

   5
   ```

   ```text expect=c10-2
   35
   ```

3. Copy every `.txt` file in a directory into a `backup/` subdirectory.

   > [!hint]
   > `list_dir` returns bare names, not paths: join them with the directory
   > yourself (`dir + "/" + name`). Create `backup/` before the loop, and
   > note that it shows up in `list_dir` too.

   ```coil challenge=c10-3
   use io::sync::{println};
   use io::fs::{create_dir_all, list_dir, copy};
   use text::{Searchable};
   use collections::{sort};

   fn main() {
       let dir = "notes";
       // Copy every .txt file in notes/ into notes/backup/.

       for name in sort(list_dir(dir + "/backup")?) {
           println(name)?;
       }
   }
   ```

   ```text challenge=c10-3 file=notes/monday.txt
   water the plants
   ```

   ```text challenge=c10-3 file=notes/tuesday.txt
   call Ada
   ```

   ```text challenge=c10-3 file=notes/ideas.md
   # not a .txt file
   ```

   ```text expect=c10-3
   monday.txt
   tuesday.txt
   ```

4. Change the greeting program to greet every name it is given:
   `coil … greet.hy -- Ada Grace` prints two lines.

   > [!hint]
   > `args()` starts with the program's own name, so the names start at
   > index 1.

   ```coil challenge=c10-4 args=Ada,Grace
   use io::sync::{println, eprintln};
   use env::{args, var, exit};

   fn main() {
       let argv = args().unwrap_or(Vec::new());
       if argv.len() < 2 {
           eprintln("usage: greet NAME")?;
           exit(2);
       }
       let greeting = var("GREETING").unwrap_or("Hello");
       println(greeting + ", " + argv[1])?;
   }
   ```

   ```text expect=c10-4
   Hello, Ada
   Hello, Grace
   ```

5. Check something: run the file-reading example from this chapter without
   `-A`. Which flag does the error ask for, and which chain of calls does
   it show?

Next: [Chapter 11 — Testing](/docs/manual/tutorial/11-testing).

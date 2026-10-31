---
title: Chapter 6 — Error handling
description: "Result for operations that can fail, raise and ? to pass errors along, ?? for fallbacks, and panic for bugs."
---

# Chapter 6 — Error handling

Coil has no exceptions. A function that can fail says so in its return type
by returning a `Result`, and the caller decides what to do with a failure.
Two short operators, `?` and `??`, keep that from getting verbose.

## Result

`Result<T, E>` is an enum from the prelude with two cases: `Ok(value)` when
the operation worked, and `Err(error)` when it did not. `E` is the type of
the error, often a `string` message:

```coil
use io::sync::{println};
use string::{format};

fn divide(int a, int b) -> Result<int, string> {
    if b == 0 {
        return Err("division by zero");
    }
    return Ok(a / b);
}

fn main() {
    match divide(10, 2) {
        Ok(q) => println(format("10 / 2 = %i", q))?,
        Err(msg) => println("failed: " + msg)?,
    }
    match divide(1, 0) {
        Ok(q) => println(format("1 / 0 = %i", q))?,
        Err(msg) => println("failed: " + msg)?,
    }
}
```

Output:

```text
10 / 2 = 5
failed: division by zero
```

The caller cannot use the quotient without looking at which case it got, so
an unhandled error cannot slip through unnoticed.

## raise

`raise e` returns `Err(e)` from the current function. It reads well for
validation:

```coil
fn check_port(int port) -> Result<int, string> {
    if port < 1 || port > 65535 {
        raise "port out of range";
    }
    return Ok(port);
}
```

## ? passes errors up

Most of the time a function cannot fix an error itself and should hand it to
its caller. Postfix `?` does exactly that: on `Ok(v)` it gives you `v`, and
on `Err(e)` it returns `Err(e)` from the current function straight away:

```coil
use io::sync::{println};
use string::{format};
use conv::{parse_int};
use text::{Searchable, Text};

// "3, 4, 5" → 12
fn sum_csv(string line) -> Result<int, string> {
    let total = 0;
    for field in line.split(",") {
        total += parse_int(field.trim())?;
    }
    return Ok(total);
}

fn main() {
    println(format("%v", sum_csv("3, 4, 5")))?;
    println(format("%v", sum_csv("3, four, 5")))?;
}
```

Output:

```text
Ok(12)
Err(invalid integer)
```

Without `?`, each of those two calls would need its own `match`. This is
also why every `println` in this tutorial ends in `?`: printing returns a
`Result<int, IoError>`, and `?` passes a write failure up to `main`.

`?` works on `Option` too: in a function that returns an `Option`, `x?`
gives the value inside `Some`, or returns `None`.

## One error type per function

All the errors a function passes on with `?` and `raise` must have the same
type. `sum_csv` above only deals in `string` errors, which is why it works.
`main` in that example only uses `?` on `println`, whose errors are
`IoError`s.

Mixing the two in one function is a compile error. The usual structure is a
`main` that only prints, calling functions that do the work and return their
own error type:

```coil
use io::sync::{println, eprintln};
use string::{format};
use conv::{parse_int};

fn run() -> Result<int, string> {
    let width = parse_int("80")?;
    let height = parse_int("24")?;
    return Ok(width * height);
}

fn main() {
    match run() {
        Ok(cells) => {
            println(format("%i cells", cells))?;
        },
        Err(e) => {
            eprintln("error: " + e)?;
        },
    }
}
```

Output:

```text
1920 cells
```

When both error types are your own, an `impl Into<MyError> for ParseError` in
the same module lets `?` do the conversion itself (see
[`?` and errors](/docs/language/operators)). Otherwise, to turn one error type
into another, use the `map_err` method:
`parse_int(s).map_err(fn (string e) => MyError::BadNumber(e))?`. `Result` and
`Option` have more methods like it (`map`, `and_then`, `unwrap_or`, …), all
listed on their reference pages: [`Result`](/docs/reference/prelude/Result),
[`Option`](/docs/reference/prelude/Option).

## ?? gives a fallback

`value ?? fallback` takes the value inside an `Option`, or `fallback` when
there is none. It takes an `Option` only: on a `Result` it would throw the
error away without a word, so a `Result` spells that out with
`.unwrap_or(fallback)` (or `.ok() ?? fallback`):

```coil
use io::sync::{println};
use string::{format};
use conv::{parse_int};

fn main() {
    let retries = parse_int("not a number").unwrap_or(3);
    let names: Vec<string> = [];
    let last = names.pop() ?? "nobody";
    println(format("%i retries, last name %s", retries, last))?;
}
```

Output:

```text
3 retries, last name nobody
```

Use a fallback when a default is genuinely fine. When the user should hear
about the problem, use `?` or `match`.

## When main fails

If `main` returns an error, the program stops with exit code 1 and prints
it:

```coil fail
fn main() {
    raise "config file missing";
}
```

```text
panic: main returned Err(config file missing) at app.coil:2:5
```

That is fine for scripts. For programs other people run, catch errors in
`main` and print a helpful message with `eprintln`, as `run()` above does.

## panic is for bugs

Some failures are not something the caller can handle: an index past the end
of a vector, an integer overflow, a broken assumption in your own code. These
**panic**: the program stops immediately with a message and the location.
`defer` blocks still run on the way out.

You can panic yourself:

```coil
fn percent(int part, int whole) -> int {
    if whole == 0 {
        panic "percent: whole must not be zero";
    }
    return part * 100 / whole;
}
```

The rule of thumb: return a `Result` when the failure depends on the outside
world (a missing file, bad user input, a network error), and panic when it
means the program itself is wrong.

## Henry's challenges

> [!henry]
> When a nautilus meets trouble it pulls into its shell and lets the
> current carry it home. `?` does the same with errors. Practise with
> `Result`, `raise`, `?` and `??`.

1. Write `fn parse_point(string s) -> Result<(int, int), string>` that
   accepts text like `"3,4"`, using `.split`, `trim`, `parse_int` and `?`.
   Make `"3;4"` an error with a message of your own.

   > [!hint]
   > `split` hands back however many pieces there are. Check for exactly
   > two with `len()` and `raise` your message before you index them, or
   > `"3"` alone panics instead of returning an `Err`.

   ```coil challenge=c06-1
   use conv::{parse_int};
   use text::{Searchable, Text};

   fn parse_point(string s) -> Result<(int, int), string> {
       // Split at ",", make sure there are two parts, then parse each one.
       raise "not written yet";
   }
   ```

   ```coil check=c06-1
   use tests::assert;
   use solution::{parse_point};

   test("\"3,4\" is the point (3, 4)") {
       let p = parse_point("3,4")?;
       assert!(p[0] == 3 && p[1] == 4, "expected (3, 4)");
   }

   test("spaces around the numbers are fine") {
       let p = parse_point(" 3 , 4 ")?;
       assert!(p[0] == 3 && p[1] == 4, "expected (3, 4)");
   }

   test("\"3;4\" is an error") {
       assert!(parse_point("3;4").is_err());
   }

   test("a lone \"3\" is an error, not a panic") {
       assert!(parse_point("3").is_err());
   }

   test("\"3,4,5\" is an error") {
       assert!(parse_point("3,4,5").is_err());
   }

   test("\"3,x\" is an error") {
       assert!(parse_point("3,x").is_err());
   }
   ```

2. Change `divide` to return `Option<int>` instead, and use `??` to print
   `0` when dividing by zero.

   ```coil challenge=c06-2
   fn divide(int a, int b) -> Result<int, string> {
       if b == 0 {
           return Err("division by zero");
       }
       return Ok(a / b);
   }
   ```

   ```coil check=c06-2
   use tests::assert;
   use solution::{divide};

   test("10 / 2 is Some(5)") {
       assert!((divide(10, 2) ?? -1) == 5);
   }

   test("1 / 0 is None, so ?? gives 0") {
       assert!(divide(1, 0).is_none());
       assert!((divide(1, 0) ?? 0) == 0);
   }
   ```

3. Write a `main` that calls `parse_point` on a bad input and prints
   `error: …` to standard error with `eprintln`.

   > [!hint]
   > `?` in `main` already deals in `println`'s `IoError`s, so a `string`
   > error cannot go through it. `match` on the result, as `run()` does in
   > this chapter.

   ```coil challenge=c06-3
   use io::sync::{println, eprintln};

   // A stand-in: use your own parse_point from the first challenge.
   fn parse_point(string s) -> Result<(int, int), string> {
       raise "expected two numbers separated by a comma";
   }

   fn main() {
       let p = parse_point("3;4");
   }
   ```

   ```text expect=c06-3 stream=stderr match=prefix
   error: 
   ```

4. Change `sum_csv` so that empty fields are skipped instead of failing:
   `"3,,4"` and `"3, 4,"` should both give `Ok(7)`.

   ```coil challenge=c06-4
   use conv::{parse_int};
   use text::{Searchable, Text};

   fn sum_csv(string line) -> Result<int, string> {
       let total = 0;
       for field in line.split(",") {
           total += parse_int(field.trim())?;
       }
       return Ok(total);
   }
   ```

   ```coil check=c06-4
   use tests::assert;
   use solution::{sum_csv};

   test("\"3,,4\" is 7") {
       assert!(sum_csv("3,,4")? == 7);
   }

   test("\"3, 4,\" is 7") {
       assert!(sum_csv("3, 4,")? == 7);
   }

   test("\"3, 4, 5\" is still 12") {
       assert!(sum_csv("3, 4, 5")? == 12);
   }

   test("\"3, four\" is still an error") {
       assert!(sum_csv("3, four").is_err());
   }
   ```

5. Write `fn last_len(Vec<string> words) -> Option<int>` using `?` on
   `words.pop()`, and try it on an empty vector.

   ```coil challenge=c06-5
   fn last_len(Vec<string> words) -> Option<int> {
       // Use ? on words.pop().
       return None;
   }
   ```

   ```coil check=c06-5
   use tests::assert;
   use solution::{last_len};

   test("the last word of [\"a\", \"abc\"] has length 3") {
       assert!((last_len(["a", "abc"]) ?? -1) == 3);
   }

   test("an empty vector gives None") {
       let words: Vec<string> = [];
       assert!(last_len(words).is_none());
   }
   ```

6. Check something: write a function returning `Result<int, string>` that
   uses `?` on both `parse_int(…)` and `println(…)`. Read the compiler's
   error, then fix it with `map_err`.

   > [!hint]
   > The error names the two types that disagree. To turn the `IoError`
   > into a `string`: `println(…).map_err(fn (IoError e) => show(e))?`.

   ```coil challenge=c06-6
   use io::sync::{println};
   use conv::{parse_int};

   fn run() -> Result<int, string> {
       let n = parse_int("5")?;
       println("got it")?;
       return Ok(n);
   }

   fn main() {
       let _ = run();
   }
   ```

Next: [Chapter 7 — Traits and generics](/docs/manual/tutorial/07-traits-and-generics).

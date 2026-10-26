---
title: Chapter 11 — Testing
description: "Test cases with assert!, running them with coil test, examples in documentation that run as tests, and contracts that coil test checks with generated inputs."
---

# Chapter 11 — Testing

Coil has testing built in: test cases live next to your code, examples in
documentation comments run as tests, and functions that state their
expectations as contracts are tested with generated inputs without you
writing a single case.

## Test cases

A test file is a `.hy` file under `tests/` with one or more
`test("…") { … }` blocks and no `main`. `assert!` from the stdlib module
`tests` checks a condition and fails the case when it is false:

```coil
use tests::assert;

fn fizzbuzz(int n) -> string {
    if n % 15 == 0 {
        return "FizzBuzz";
    }
    if n % 3 == 0 {
        return "Fizz";
    }
    if n % 5 == 0 {
        return "Buzz";
    }
    return show(n);
}

test("multiples of three are Fizz") {
    assert!(fizzbuzz(3) == "Fizz");
    assert!(fizzbuzz(9) == "Fizz");
}

test("other numbers are printed as they are") {
    assert!(fizzbuzz(7) == "7", "7 is not a multiple of 3 or 5");
}
```

In a real project the function lives in `src/` and the test file imports it
with `use`, as chapter 9 showed. The optional second argument of `assert!`
is a message to show when it fails.

Run every test with `spool test`, or with `coil test`:

```bash
coil test --root ~/.coil/stdlib/src tests
```

```text
running 1 file (seed 0x331d79d4efd8a9c4, 4 jobs)

test result: ok. 2 passed; 0 failed; 2 total; finished in 0.05s
```

On a terminal a progress bar counts files while the run goes; passing files
print nothing (`-v` lists them). If a bug made `fizzbuzz(9)` return `"9"`,
the run would end with the failing case, the condition that did not hold,
and anything the case printed:

```text
running 1 file (seed 0x331d79d4efd8a9c4, 4 jobs)
FAILED tests/fizzbuzz.hy

failures:

---- tests/fizzbuzz.hy: multiples of three are Fizz ----
failed: Assertion: 'fizzbuzz(9) == "Fizz"' failed

failed:
    tests/fizzbuzz.hy: multiples of three are Fizz

test result: FAILED. 1 passed; 1 failed; 2 total; finished in 0.05s
```

What a test prints to stdout or stderr never reaches the terminal while the
run goes: it shows under `stdout:` / `stderr:` in that case's failure
(`--show-output` prints passing cases' output too). To check what code
prints, capture it with `io::capture_begin()` and `io::capture_end()`, which
returns `(stdout, stderr)`:

```coil
use io::{capture_begin, capture_end, stdout, write};
use string::to_bytes;
use tests::assert;

test("greets") {
    capture_begin();
    write(stdout(), to_bytes("hello\n"))?;
    let (out, _) = capture_end();
    assert!(out == "hello\n");
}
```

Each case runs in its own isolated VM, so one that panics does not stop the
others. `--fail-fast` stops at the first failure.

A test body can use `?` on any `Result` or `Option`: a failure ends the case
and shows the error. That keeps tests that do IO short:

```coil ignore
use io::file::{read_text};
use tests::assert;

test("the sample config is not empty") {
    let text = read_text("tests/data/sample.conf")?;
    assert!(text.len() > 0);
}
```

Tests that touch files or the network need the same permission flags as
any program: `coil test --allow-read …`.

## Examples in documentation

Code blocks in `///` comments are examples, and `coil test` runs them too.
An example that compiles and runs without failing passes, so your
documentation cannot drift away from the code:

````coil ignore
/// Returns the larger of `a` and `b`.
///
/// # Examples
///
/// ```
/// use mathx::{larger};
/// # use tests::assert;
/// assert!(larger(3, 9) == 9);
/// ```
fn larger(int a, int b) -> int {
    if a > b {
        return a;
    }
    return b;
}
````

Lines starting with `# ` are hidden in editor hover but still run, which
suits setup like the `assert` import. Mark an example ```` ```no_run ````
to only compile it, or ```` ```ignore ```` to skip it. Every page in the
[reference](/docs/reference) comes from comments like these.

## Contracts

A function can state what it needs and what it promises. `requires` is
checked when it is called and `ensures` when it returns, with `result`
standing for the return value:

```coil ignore
/// Scales a rating from 0 to 10 to a percentage.
fn to_percent(int rating) -> int
    requires rating >= 0
    ensures result >= 0 && result <= 100
{
    return rating * 10;
}
```

A broken contract panics with a message that says which clause failed and,
for `requires`, which call was at fault.

Contracts also feed `coil test`. For each function in your project with a
contract, it generates a test that calls the function with random arguments
that satisfy the `requires`, small values first, and checks the `ensures`.
Run against the function above, it finds the bug, which no hand-written
case covered:

```text
contracts of 1 project file
> Test "contract: to_percent" failed: to_percent(rating = 11): contract violated: ensures result >= 0 && result <= 100 in to_percent
```

The fix is either `requires rating <= 10` or clamping the result. Classes
can state an `invariant` that every public method must keep, and
`coil verify` can prove contracts for all inputs with an SMT solver instead
of testing them. The [contracts page](/docs/language/contracts) covers all of
it.

## Coverage and mutation testing

`spool coverage` (or `coil test --coverage`) reports which lines your tests
ran. `spool infect` (or `coil mutate`) goes further: it makes small changes
to your code, such as turning `<` into `<=`, and reports the ones no test
noticed. Each of those points at a missing test.

## Henry's challenges

> [!henry]
> Before a nautilus dives, it checks the gas in every chamber. Check your
> code the same way, with test cases, documentation examples and
> contracts. Put the code under test in `src/` and the tests in `tests/`,
> as chapter 9 set out.

1. Write tests for the `Stack<T>` class from chapter 4: popping an empty
   stack returns `None`, and items come out in reverse order.

   > [!hint]
   > `Option` compares with `==`, so `assert!(s.pop() == Some(2));` works,
   > and so does `assert!(s.pop().is_none());`.

   ```coil challenge=c11-1 file=tests/stack.hy
   use stack::{Stack};
   use tests::assert;

   test("popping an empty stack gives None") {
       raise "write this test";
   }

   test("items come out in reverse order") {
       raise "write this test";
   }
   ```

   ```coil challenge=c11-1 file=src/stack.hy
   class Stack<T> {
       items: Vec<T>,
   }

   impl Stack<T> {
       pub static fn new() -> Stack<T> {
           return new Stack(Vec::new());
       }

       pub fn push(T item) {
           self.items.push(item);
       }

       pub fn pop() -> Option<T> {
           return self.items.pop();
       }
   }
   ```

   ```text expect=c11-1 stream=stderr match=contains
   test result: ok. 2 passed
   ```

2. Add an example to the documentation of a function you wrote earlier and
   run it with `coil test`. Then break the example on purpose and watch it
   fail.

   ```coil challenge=c11-2 file=src/mathx.hy
   /// Returns the larger of `a` and `b`.
   fn larger(int a, int b) -> int {
       if a > b {
           return a;
       }
       return b;
   }
   ```

   ```coil challenge=c11-2 file=tests/mathx.hy
   use mathx::{larger};
   use tests::assert;

   test("larger picks the larger one") {
       assert!(larger(3, 9) == 9);
   }
   ```

   ```text expect=c11-2 stream=stderr match=contains
   test result: ok. 2 passed
   ```

3. Give `average(Vec<int> xs) -> int` a `requires` that rules out empty
   input, and an `ensures` that the result is between the smallest and the
   largest element. Let `coil test` check it.

   > [!hint]
   > A contract clause can call your own functions, so write `smallest` and
   > `largest` helpers and use them in `ensures`. Integer division rounds
   > toward zero, which keeps the average inside that range even for
   > negative numbers.

   ```coil challenge=c11-3 file=src/stats.hy
   fn average(Vec<int> xs) -> int {
       let total = 0;
       for x in xs {
           total += x;
       }
       return total / xs.len();
   }
   ```

   ```coil challenge=c11-3 file=tests/stats.hy
   use stats::{average};
   use tests::assert;

   test("the average of 2, 4 and 9 is 5") {
       assert!(average([2, 4, 9]) == 5);
   }
   ```

   ```text expect=c11-3 stream=stderr match=contains
   test result: ok. 2 passed
   ```

4. Check something: the two FizzBuzz tests in this chapter pass. Run
   `coil mutate` on them. Which changes to `fizzbuzz` go unnoticed? Add
   tests until none survive.

   > [!hint]
   > No case ever checks a multiple of 5 or of 15, so the mutants in those
   > two lines survive. A `fizzbuzz(10) == "Buzz"` and a
   > `fizzbuzz(30) == "FizzBuzz"` case are enough to catch them all.

5. Check something: write a `greet(string name)` function that prints its
   greeting, and test what it prints with `io::capture_begin()` and
   `io::capture_end()`.

   > [!hint]
   > `capture_end()` returns `(stdout, stderr)`, and the output still ends
   > in the newline `println` wrote.

   ```coil challenge=c11-5 file=src/greet.hy
   use io::sync::{println};

   fn greet(string name) {
       let _ = println("Hello, " + name);
   }
   ```

   ```coil challenge=c11-5 file=tests/greet.hy
   use io::{capture_begin, capture_end};
   use greet::{greet};
   use tests::assert;

   test("greet prints Hello, Ada") {
       raise "capture what greet(\"Ada\") prints and check it";
   }
   ```

   ```text expect=c11-5 stream=stderr match=contains
   test result: ok. 1 passed
   ```

Next: [Chapter 12 — Generators](/docs/manual/tutorial/12-generators).

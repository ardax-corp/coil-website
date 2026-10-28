---
slug: "keywords/index"
title: "Keywords"
description: "Every keyword and contextual keyword, with what it does and an example."
module: "keywords"
kind: "module"
name: "keywords"
origin: "builtin"
auto: true
order: 43
---

Keywords are recognized by position. Contextual keywords such as `self`,
`result`, `old` or `from` are only special where their page says, and stay
ordinary identifiers elsewhere. Avoid using any of them as a name anyway: `true`,
`false` and `typeof` always parse as keywords in an expression.

Built into the compiler.

## Keywords

| Name | Description |
|------|-------------|
| [`fn`](/docs/reference/keywords/fn) | Declares a function, a method, or (written in an expression) an anonymous function. |
| [`let`](/docs/reference/keywords/let) | Declares a mutable local variable. |
| [`const`](/docs/reference/keywords/const) | Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`. |
| [`static`](/docs/reference/keywords/static) | Declares a module-level or class-level slot shared by the whole program, or a method without `self`. |
| [`readonly`](/docs/reference/keywords/readonly) | A read-only view of a value: nothing reachable through it can be changed. |
| [`if`](/docs/reference/keywords/if) | Runs a block when a [`bool`](/docs/reference/types/bool) condition is true. |
| [`else`](/docs/reference/keywords/else) | Introduces the branch of an `if` that runs when its condition is false (or its pattern does not match). |
| [`while`](/docs/reference/keywords/while) | Repeats a block while a [`bool`](/docs/reference/types/bool) condition is true. |
| [`for`](/docs/reference/keywords/for) | Iterates over the values of an array, [`Vec`](/docs/reference/prelude/Vec), range, coroutine or any [`IntoIterator`](/docs/reference/prelude/IntoIterator). |
| [`in`](/docs/reference/keywords/in) | Separates the loop variable from the iterated value in a `for` loop. |
| [`break`](/docs/reference/keywords/break) | Leaves the innermost `while` or `for` loop at once. |
| [`continue`](/docs/reference/keywords/continue) | Skips the rest of the current iteration and goes on with the next one. |
| [`return`](/docs/reference/keywords/return) | Leaves the current function, optionally with a value. |
| [`raise`](/docs/reference/keywords/raise) | Returns early from the current function with `Result::Err(e)`. |
| [`panic`](/docs/reference/keywords/panic) | Aborts with a message: `panic "message"`. |
| [`typeof`](/docs/reference/keywords/typeof) | Gives the static type of an expression as a [`string`](/docs/reference/types/string), at compile time. |
| [`comptime`](/docs/reference/keywords/comptime) | Computes an expression while compiling; the program gets its value. |
| [`enum`](/docs/reference/keywords/enum) | Declares a sum type: a value is exactly one of its variants. |
| [`match`](/docs/reference/keywords/match) | Compares a value against patterns and evaluates the first arm that matches. |
| [`default`](/docs/reference/keywords/default) | The catch-all arm of a `match`: `default => …`. |
| [`type`](/docs/reference/keywords/type) | Declares a type alias, or an associated type in a trait or `impl`. |
| [`use`](/docs/reference/keywords/use) | Imports items from a module, or lists the outer variables a lambda or `defer` captures. |
| [`as`](/docs/reference/keywords/as) | Renames an import, or converts a value between primitive types. |
| [`mod`](/docs/reference/keywords/mod) | Loads a module file without importing any of its names: `mod name;`. |
| [`extern`](/docs/reference/keywords/extern) | Binds C functions from a native library at compile time: `extern "lib" { fn …; }`. |
| [`class`](/docs/reference/keywords/class) | Declares a class: a named heap type with fields, constructed with `new`. |
| [`impl`](/docs/reference/keywords/impl) | Adds methods to a type (`impl Type { … }`) or implements a trait for it (`impl Trait for Type { … }`). |
| [`pub`](/docs/reference/keywords/pub) | Makes a class field or method accessible from outside the type. |
| [`new`](/docs/reference/keywords/new) | Constructs a class instance: `new Class(args)`. |
| [`defer`](/docs/reference/keywords/defer) | Schedules a block to run when the enclosing function exits. |
| [`true`](/docs/reference/keywords/true) | The [`bool`](/docs/reference/types/bool) value true. |
| [`false`](/docs/reference/keywords/false) | The [`bool`](/docs/reference/types/bool) value false. |
| [`gen`](/docs/reference/keywords/gen) | Declares a generator function (a coroutine): `gen fn name(…) { … }`. |
| [`async`](/docs/reference/keywords/async) | Removed. |
| [`yield`](/docs/reference/keywords/yield) | Suspends a generator and hands a value to the code that resumed it. |
| [`resume`](/docs/reference/keywords/resume) | Runs a coroutine until its next `yield` or its end, and gives the yielded or returned value. |
| [`with`](/docs/reference/keywords/with) | Sends a value into a coroutine as part of `resume`: `resume h with value`. |
| [`where`](/docs/reference/keywords/where) | Adds trait constraints to a generic function: `where Trait<A, B>`. |
| [`pure`](/docs/reference/keywords/pure) | Declares that a function has no effects: `pure fn name(…)`. |
| [`uses`](/docs/reference/keywords/uses) | Declares the effects a function may have: `uses {read, write}`. |
| [`requires`](/docs/reference/keywords/requires) | States a precondition, checked when the function is entered: `requires cond, "message"`. |
| [`ensures`](/docs/reference/keywords/ensures) | States a postcondition, checked on every return: `ensures cond, "message"`. |
| [`invariant`](/docs/reference/keywords/invariant) | States a condition that must always hold for a class's instances, or each time a loop tests its condition. |
| [`decreases`](/docs/reference/keywords/decreases) | States an [`int`](/docs/reference/types/int) that every iteration of a `while` loop makes smaller, without going negative. |
| [`trait`](/docs/reference/keywords/trait) | Declares a trait: a set of functions that types implement with `impl Trait for Type`. |
| [`test`](/docs/reference/keywords/test) | Declares a test case run by `coil test`: `test("name") { … }`. |
| [`forall`](/docs/reference/keywords/forall) | Writes a polymorphic (higher-rank) function type: `forall T. T -> T`. |
| [`from`](/docs/reference/keywords/from) | Delegates a generator to another coroutine: `yield from other()`. |
| [`struct`](/docs/reference/keywords/struct) | Declares a C struct layout for FFI: `extern struct Name { field: type, … };`. |
| [`attr`](/docs/reference/keywords/attr) | Declares an attribute macro: `attr name(FnDecl f, …) -> Code { … }`. |
| [`derive`](/docs/reference/keywords/derive) | Declares a derive macro: `derive Name(TypeDecl t) -> Code { … }`, used as `#[derive(Name)]`. |
| [`macro`](/docs/reference/keywords/macro) | Declares a function-style macro: `macro name(Expr a, …) -> Code { … }`, used as `name!(…)`. |
| [`quote`](/docs/reference/keywords/quote) | Builds generated code inside a macro: `quote items\|expr\|stmts\|type { template }`. |
| [`attrs`](/docs/reference/keywords/attrs) | Lists the field and variant attributes a derive macro owns: `derive Name(TypeDecl t) -> Code attrs(names) { … }`. |
| [`done`](/docs/reference/keywords/done) | Tells whether a coroutine has finished: `done(handle)` returns a [`bool`](/docs/reference/types/bool). |
| [`self`](/docs/reference/keywords/self) | The receiver of a method: the instance the method was called on. |
| [`result`](/docs/reference/keywords/result) | The value being returned, inside an `ensures` clause. |
| [`old`](/docs/reference/keywords/old) | The value an expression had when the function was entered, inside an `ensures` clause: `old(e)`. |
| [`Constraint`](/docs/reference/keywords/Constraint) | The kind of a constraint, in a kind annotation: `c: * -> Constraint`. |

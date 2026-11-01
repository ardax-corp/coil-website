---
title: Error codes
description: "Diagnostics carry a stable ErrorCode (shown as E#### in pretty output, SARIF ruleId, and LSP code). Codes are grouped by family:"
---

# Error codes

Diagnostics carry a stable `ErrorCode` (shown as `E####` in pretty output,
SARIF `ruleId`, and LSP `code`). Codes are grouped by family:

| Range | Family |
|-------|--------|
| `E00xx` | Parse / syntax |
| `E01xx` | Name resolution & types |
| `E02xx` | Enums, match, constructs |
| `E03xx` | Format strings & builtins |
| `E04xx` | Aggregates, records, FFI tags |
| `E08xx` | Codegen |
| `E09xx` | CLI / I/O / archive |

## Catalog

| Code | Name | Meaning |
|------|------|---------|
| `E0001` | `ParseError` | Syntax / parse error |
| `E0200` | `DuplicateEnum` | Two `enum` declarations with the same name in one scope, or a `class` / `enum` that redeclares a built-in type (`Option`, `Result`, `Vec`, `Range`, `Weak`, a primitive in any letter case such as `String`, a built-in error enum such as `IoError`, …) |
| `E0201` | `DuplicateConstructor` | Duplicate variant on one enum, or a bare constructor when two in-scope enums share that case name (`Ambiguous constructor`). Write `Status::Ok` / `Result::Ok(…)` |
| `E0208` | `DuplicateField` | Duplicate record field (parse-time for literals, constructors, patterns, and enum variant field decls; typecheck keeps the same code if parse is bypassed). Also duplicate named arguments and duplicate class field names (instance, `static` or `const`). |
| `E0100` | `UnknownValue` | Cannot find value in this scope |
| `E0101` | `UnknownFunction` | Cannot find function |
| `E0102` | `TypeMismatch` | Type mismatch |
| `E0103` | `InfiniteType` | Infinite type (occurs check) |
| `E0104` | `NotAFunction` | Value is not callable |
| `E0105` | `TooManyArguments` | Too many arguments in a call that uses named arguments. A positional call with too many arguments reports `E0119` |
| `E0106` | `UndeclaredAssignment` | Assignment to undeclared variable |
| `E0107` | `InvalidAssignment` | Invalid assignment target (includes removed `arr[] =` append — use `Vec::push`); a write through a `readonly` value, or a call that passes one where the callee mutates it |
| `E0108` | `VariableRedeclaration` | Variable redeclaration |
| `E0109` | `ConstantRedeclaration` | Constant redeclaration |
| `E0110` | `UnknownType` | Unknown type name |
| `E0111` | `ReturnMismatch` | Return type mismatch |
| `E0112` | `YieldOutsideAsync` | `yield` outside `gen fn` |
| `E0113` | `ResumeTypeMismatch` | Reserved; not emitted today. A `resume h with v` whose `v` does not match the send type reports `E0102` |
| `E0114` | `InvalidTry` | `?` on non-Option/non-Result, or outside a function |
| `E0115` | `InvalidCoalesce` | `??` on anything but an `Option` (a `Result` takes `.unwrap_or(..)` or `.ok() ??`) |
| `E0116` | `InvalidOptionalAccess` | `?.` on non-Option (e.g. Result) |
| `E0117` | `ConflictingErrorType` | Mixed Option/Result modes in one function. A conflicting `E` (`raise "s"` then `raise 1`, or `?` on a `Result` with another `E`) reports `E0102` |
| `E0118` | `UnreachableCode` | Code after a diverging statement (warning) |
| `E0119` | `GenericTypeError` | Other type error (includes rejected dynamic `[T]` — use `[T; N]` or `Vec<T>`) |
| `E0120` | `WrongArity` | No overload of the function takes that many arguments |
| `E0121` | `DuplicateOverload` | Two overloads (of a function or a macro) take the same number of arguments |
| `E0122` | `AmbiguousOverload` | A call or a function value matches more than one overload; annotate the value or the arguments |
| `E0123` | `DeferNeverRuns` | Warning: a `defer` whose block never ends, because a loop after it in the same block (or an enclosing one) never terminates. A `defer` in a block that ends before the loop does not warn. See [Defer](/docs/language/syntax#defer) |
| `E0124` | `WildcardImport` | `use path::*` is banned (virtual and userland) — list names explicitly; prelude is auto-injected |
| `E0125` | `ExpressionNestingTooDeep` | A single expression recursed past the compiler's internal depth limit during typecheck or codegen (not the compiled program's own call stack, which the VM grows at run time) |
| `E0126` | `InvalidDrop` | Invalid `fn drop(self)` (not an inherent class or enum method, on a scalar-backed enum, static, extra args, duplicate, non-unit return, or on a `readonly class`) |
| `E0127` | `UnsupportedGenericFnValue` | A generic `fn` with a type parameter nested in its signature (`Vec<T>`, `Option<T>`, tuples, classes) used as a value where no specialized copy can stand in for it, such as copying it on (`let g = wrap; let k = g;`). A `let` binding only called (`let g = wrap; g(2.5)`) or passing it to a parameter of a concrete function type works. Otherwise call it directly or wrap it in a lambda at a concrete type. Also a generic `fn` whose result is a type parameter, held as a polymorphic value and called with more arguments than it declares (`let f = id; f(add, 1, 2)`): call it by name with every argument |
| `E0128` | `PrivateMember` | Private field or inherent method used outside the type's `impl` |
| `E0129` | `Deprecated` | Warning: call to a deprecated function (`io::drive`, `io::wait_ready`) or the deprecated `static const` spelling (write `const`). The help names the replacement |
| `E0130` | `ByteWrap` | Warning: `byte` `+ - * ** <<` or unary `-`, whose result wraps modulo 256. Convert to `int` first (`x as int`) for exact arithmetic |
| `E0131` | `ShiftCountOutOfRange` | A constant shift count (`x << 64`, `x >> -1`, or the compound `<<=` / `>>=`) outside `0..=63`. A run-time count out of range panics with `shift count out of range` |
| `E0132` | `UnassignedLocal` | A type-only `let x: T;` of a non-scalar type read where it may not have been assigned yet (one branch only, only inside a loop body, or captured before the assignment) |
| `E0133` | `DuplicateImport` | Two `use` imports bind the same local name to different items (`use math::{add, mul as add};`) |
| `E0134` | `ConstNotComputable` | A `const` or `comptime` could not be computed while compiling: its initializer has an effect the build did not grant, a granted call was refused, it panicked or ran into a `--comptime-*` limit, or a `comptime` value holds something that exists only at run time (a function, a stream; a `const` like that runs at startup instead). See [Compile-time code](/docs/language/comptime) |
| `E0135` | `ComptimeResultChanged` | Info: `--comptime-refresh` computed a different result than the one in the compile-time result cache |
| `E0136` | `UnusedResult` | Warning: an expression statement drops a `Result` (`Err("bad");`, or `f(x);` where `f` returns one), and with it any error it holds. Handle it with `?` or `match`, or discard it on purpose with `let _ = f(x);`. `f(x)?;`, an assignment (`x = r;`) and a block's tail value do not warn. Inside a `test("…") { … }` body it is an error, since a dropped `Result` there (an `assert!` helper called as `helper();`) would hide a failed assert: write `helper()?;` to fail the test, or `let _ = helper();`. A `fn` or lambda written inside a test body keeps the warning |
| `E0138` | `ComptimeFoldBudget` | Info: at `-O2` and above, a pure call with constant arguments (`fib(32)`) ran longer than automatic compile-time folding allows, so it stays a call. Write `comptime fib(32)` (or bind it to a `const`) to compute it while compiling; that makes compilation take longer, and the help says how long the call ran before it was stopped |
| `E0139` | `EscapeMismatch` | A function states an escape fact (`#[noescape(x)]`, `#[fresh]`) that the facts the compiler inferred do not support, or `#[noescape]` names no parameter. See [Memory](/docs/language/memory#stating-escape-facts) |
| `E0140` | `RegionEscape` | An object made inside a `region { … }` block can leave it: assigned to a local declared outside, stored into an outer object or static, passed to a function that keeps it, captured by a `defer`, yielded, or the region's value. See [Memory](/docs/language/memory#regions) |
| `E0141` | `CowCopy` | Warning: a write copies an object that a variable shares with another name (`let b = a; b.x = 1;`), or a lambda writes a captured copy, so the change never reaches the original. Write `let b = mut a` (or `for mut`, `use (mut x)`) to change the original in place, stop using the other name before the write, or hold shared state in a `Ref<T>`. See [Memory](/docs/language/memory#copy-on-write) |
| `E0142` | `CowDroppedWrite` | Warning: a method changes a temporary copy of a shared object (`shelf.top().bump()`, where `top` returns an element the shelf still holds), so the change is dropped. Write to a variable (`let x = mut …`) to keep it, or `let _ = …` when only the call's other effects matter. See [Memory](/docs/language/memory#copy-on-write) |
| `E0143` | `CaptureAssign` | Warning: a lambda assigns a `use (mut x)` capture (`fn () use (mut n) { n += 1; }`). `mut` shares the captured object, not the variable, so the outer `n` keeps its value. Hold the value in a `Ref<T>` to change it from the lambda. See [Memory](/docs/language/memory#copy-on-write) |
| `E0144` | `FnKeyOutsideFunction` | `symbol::fn_key()` outside a function, method, lambda or test body (a `const` or `static` initializer, top-level code): there is no function for it to name. See [`symbol`](/docs/reference/symbol) |
| `E0145` | `KeyedGenericFnValue` | A generic function that calls `symbol::fn_key()` used as a function value (`let f = ident;`, or passed as an argument): a function value has no type arguments for the per-instantiation key. Wrap the call at concrete types (`fn (int x) => ident(x)`). See [`symbol`](/docs/reference/symbol) |
| `E0146` | `ExitInDefer` | `return`, `raise`, `?`, or a `break` / `continue` that would leave the block, inside a `defer` body. A defer runs while its function is already returning or unwinding, so it cannot choose another exit: handle a failure inside the block (`match`, `.unwrap_or(..)`) or move the code out of the defer. Loops and lambdas inside the body keep their own `break` and `return`. See [Defer](/docs/language/syntax#defer) |
| `E0147` | `DeferInLoop` | Retired: no longer emitted. A `defer` runs at the end of its block, so one in a loop body runs every iteration |
| `E0148` | `UnclosedStream` | Warning: a local `Stream` a function opens (`open`, `connect`, `listen`, `accept`, UDP `bind` / `connect`) is never closed and never handed on: every later use is an `io` call other than `close`. Close it with `close(s)`, or right after the open with `defer use (s) { let _ = close(s); }`. Passing it to another function, returning it, storing it or capturing it quiets the warning; so does a name starting with `_`. The collector would close it eventually, but a loop can run out of descriptors first |
| `E0149` | `BorrowConflict` | While a `mut` borrow or a view is live, the place it borrows is shared, moved, captured by a lambda or replaced. Writes through the borrow would show through the second name, or go to the old object. Use the borrow for the last time first, or borrow again afterwards. See [Views](/docs/language/memory#views-classes-that-borrow) |
| `E0150` | `MisplacedMut` | `mut` where it borrows nothing: outside a `let` initializer, a `for` iterable or a view constructor's `mut` field argument; a `mut` field in a class that is not a `view class`; a `mut` field given a plain value, or a plain field given `mut place`; or a borrow of a number (there is no reference to one scalar slot: borrow the object that holds it) |
| `E0151` | `ViewEscape` | A view could outlive the place it borrows: it is stored (field, element, static, new object), held inside another type (`Option<View>`, `Vec<View>`), captured by a lambda, passed to a function that keeps it, or returned from something other than a method of the borrowed object. See [Views](/docs/language/memory#views-classes-that-borrow) |
| `E0202` | `UnknownEnum` | Cannot find the enum (or type or trait) named before `::` |
| `E0203` | `UnknownVariant` | `Enum::Case` names a case the enum does not declare |
| `E0204` | `ConstructorArity` | A constructor or constructor pattern has the wrong number of payload values |
| `E0205` | `PayloadShapeMismatch` | A pattern uses a tuple payload for a record case or the reverse |
| `E0206` | `MissingField` | A record constructor or record pattern leaves out a field |
| `E0207` | `UnknownField` | A record constructor or pattern names a field the case does not declare |
| `E0209` | `NonExhaustiveMatch` | The arms do not cover every value of the scrutinee: add the missing cases or a `default` arm. Literal arms on `int` / `string` always need `default` |
| `E0210` | `UnreachableArm` | An arm that the earlier arms already cover |
| `E0211` | `UnknownConstructorPattern` | A bare `Name(..)` pattern that no enum in scope declares |
| `E0212` | `AmbiguousField` | Reserved; not emitted today |
| `E0213` | `InvalidEnumRepr` | Invalid scalar enum (`#[repr]` / `=`): mixed backing, missing `=`, or `=` mixed with a payload |
| `E0214` | `DuplicateEnumDiscriminant` | Two scalar cases share the same backing value |
| `E0215` | `MultipleMatchCatchall` | More than one `default` arm in a `match` |
| `E0216` | `UnderscoreMatchArm` | Whole-arm `_ =>` — catch-all is `default` only. Nested `_` (`Err(_)`, `Some(_)`) is allowed |
| `E0300`–`E0301` | Format family | Specifier / arity mismatch |
| `E0400`–`E0405` | Aggregate / FFI family | Index OOB, array element mismatch, `declare`/`invoke` arity, … |
| `E0406` | `HostExecDenied` | Starting a program (the [`process`](/docs/reference/process) module) without `--allow-exec` |
| `E0407`–`E0408` | `HostExitDenied` / `HostAttachDenied` | `env::exit` or `Stream.attach` reached without `--allow-exit` / `--allow-attach`; see [Permissions](/docs/language/permissions) |
| `E0409`–`E0411` | `HostFfiExecDenied` / `HostDloadDenied` / `HostDloadNonConst` | An FFI process-exec symbol without `--allow-ffi-exec`, `dload` of a stem without `--allow-dload` (or a libc alias), or a non-literal `dload` path |
| `E0412` | `FixedArrayGrow` | Length-changing method (`push` / `insert` / …) on a fixed `[T; N]` |
| `E0413` | `EffectMismatch` | A function's effects exceed its `pure fn` / `uses {…}`, or its trait method's, or a contract clause has an effect. The message names the call chain; see [Effects](/docs/language/effects) and [Contracts](/docs/language/contracts) |
| `E0414` | `HostCapDenied` | A host call `main` or a test reaches needs read, write, net or env and the build did not grant it. The message names the flag and the call chain; see [Permissions](/docs/language/permissions) |
| `E0800`–`E0801` | Codegen family | Unknown expression / codegen error |
| `E0802`–`E0803` | `UnboundedRecursion` / `StackDepthExceeded` | Retired: no longer emitted (the VM grows its stack and checks depth at run time) |
| `E0804` | `MonomorphizeCap` | A ground call to a generic uses its shared body instead of a per-type clone: the generic instantiates itself at a growing type (polymorphic recursion), or the compile reached `--clone-budget` |
| `E0805` | `ParLockHint` | Auto-parallelization refused a loop because of a shared escape; the hint suggests locking that resource |
| `E0900` | `IoError` | I/O failure |
| `E0901` | `ArchiveVersionMismatch` | Stale `.ccoil` archive |
| `E0902` | `InvalidCliFlags` | Conflicting or unknown CLI flags |
| `E0903` | `MissingInputFile` | No input file given |

## CLI output modes

| Flag | Format | Stream |
|------|--------|--------|
| (default) | Pretty (ariadne) | stderr |
| `--log-json` | SARIF 2.1 | stdout |
| `--log-lsp` | LSP Diagnostic NDJSON | stdout |

`--log-json` and `--log-lsp` are mutually exclusive.

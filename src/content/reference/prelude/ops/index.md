---
slug: "prelude/ops/index"
title: "prelude::ops"
description: "Operator traits (Add, Eq, Ord, Show, …): implement them to use operators on your types."
module: "prelude::ops"
kind: "module"
name: "prelude::ops"
origin: "builtin"
auto: true
order: 1
---

Every operator is a trait method: `a + b` is [`Add`](/docs/reference/prelude/ops/Add), `a == b` is [`Eq`](/docs/reference/prelude/ops/Eq), `a < b`
is [`Lt`](/docs/reference/prelude/ops/Lt), and `format("%v", x)` uses [`Show`](/docs/reference/prelude/ops/Show). The primitive types implement the
ones that make sense for them. Implement a trait for your own class or enum to
give it the operator:

```coil
class Money {
    pub cents: int,
}

impl Add for Money {
    pub fn add(Money a, Money b) -> Money {
        return new Money(a.cents + b.cents);
    }
}
```

[`Num`](/docs/reference/prelude/ops/Num) and [`Integral`](/docs/reference/prelude/ops/Integral) bundle the arithmetic traits so generic code can ask for
"any number" (`fn sum<T: Num>(…)`). `#[derive(Eq, Ord, Show)]` writes the
common instances for you; see [Macros](/docs/language/macros). The rules for
each operator are in [Operators](/docs/language/operators).

Built into the compiler.

## Traits

| Name | Description |
|------|-------------|
| [`Add`](/docs/reference/prelude/ops/Add) | The addition operator `+`. |
| [`Sub`](/docs/reference/prelude/ops/Sub) | The subtraction operator `-`. |
| [`Mul`](/docs/reference/prelude/ops/Mul) | The multiplication operator `*`. |
| [`Div`](/docs/reference/prelude/ops/Div) | The division operator `/`. |
| [`Neg`](/docs/reference/prelude/ops/Neg) | The unary negation operator `-x`. |
| [`Rem`](/docs/reference/prelude/ops/Rem) | The remainder operator `%`. |
| [`Pow`](/docs/reference/prelude/ops/Pow) | The exponentiation operator `**`. |
| [`Num`](/docs/reference/prelude/ops/Num) | The numeric bundle: [`Add`](/docs/reference/prelude/ops/Add), [`Sub`](/docs/reference/prelude/ops/Sub), [`Mul`](/docs/reference/prelude/ops/Mul), [`Div`](/docs/reference/prelude/ops/Div), [`Neg`](/docs/reference/prelude/ops/Neg), [`Rem`](/docs/reference/prelude/ops/Rem) and [`Pow`](/docs/reference/prelude/ops/Pow). |
| [`Shl`](/docs/reference/prelude/ops/Shl) | The left shift operator `<<`. |
| [`Shr`](/docs/reference/prelude/ops/Shr) | The right shift operator `>>`. |
| [`BitAnd`](/docs/reference/prelude/ops/BitAnd) | The bitwise AND operator `&`. |
| [`BitOr`](/docs/reference/prelude/ops/BitOr) | The bitwise OR operator `\|`. |
| [`BitXor`](/docs/reference/prelude/ops/BitXor) | The bitwise XOR operator `^`. |
| [`BitNot`](/docs/reference/prelude/ops/BitNot) | The bitwise NOT operator `~x`. |
| [`Integral`](/docs/reference/prelude/ops/Integral) | The integer bundle: [`Num`](/docs/reference/prelude/ops/Num) plus [`Shl`](/docs/reference/prelude/ops/Shl), [`Shr`](/docs/reference/prelude/ops/Shr), [`BitAnd`](/docs/reference/prelude/ops/BitAnd), [`BitOr`](/docs/reference/prelude/ops/BitOr), [`BitXor`](/docs/reference/prelude/ops/BitXor) and [`BitNot`](/docs/reference/prelude/ops/BitNot). |
| [`Eq`](/docs/reference/prelude/ops/Eq) | The equality operators `==` and `!=`. |
| [`Ord`](/docs/reference/prelude/ops/Ord) | The ordering bundle: [`Lt`](/docs/reference/prelude/ops/Lt), [`Le`](/docs/reference/prelude/ops/Le), [`Gt`](/docs/reference/prelude/ops/Gt) and [`Ge`](/docs/reference/prelude/ops/Ge), with [`Eq`](/docs/reference/prelude/ops/Eq). |
| [`Lt`](/docs/reference/prelude/ops/Lt) | The less-than operator `<`. |
| [`Le`](/docs/reference/prelude/ops/Le) | The less-or-equal operator `<=`. |
| [`Gt`](/docs/reference/prelude/ops/Gt) | The greater-than operator `>`. |
| [`Ge`](/docs/reference/prelude/ops/Ge) | The greater-or-equal operator `>=`. |
| [`Show`](/docs/reference/prelude/ops/Show) | Conversion to a display string, used by the `%v` format specifier. |
| [`Length`](/docs/reference/prelude/ops/Length) | A size query: `x.len()`. |
| [`Into`](/docs/reference/prelude/ops/Into) | Conversion from `S` into `T`, written `impl Into<T> for S`. |

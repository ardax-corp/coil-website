---
description: "Operator traits (Add, Eq, Ord, Show, …): implement them to use operators on your types."
---
Every operator is a trait method: `a + b` is `Add`, `a == b` is `Eq`, `a < b`
is `Lt`, and `format("%v", x)` uses `Show`. The primitive types implement the
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

`Num` and `Integral` bundle the arithmetic traits so generic code can ask for
"any number" (`fn sum<T: Num>(…)`). `#[derive(Eq, Ord, Show)]` writes the
common instances for you; see [Macros](/docs/language/macros). The rules for
each operator are in [Operators](/docs/language/operators).

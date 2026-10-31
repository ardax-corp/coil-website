---
description: "Ref<T>: a shared mutable cell for state that closures and tasks must see change."
---
Lambdas, `defer` blocks and tasks capture copies of locals. Put state that several of them must update in a [`Ref`](/packages/stdlib/reference/cell/Ref).

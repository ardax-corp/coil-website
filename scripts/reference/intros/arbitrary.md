---
description: "Random values for property tests: Gen, the Arbitrary trait and any."
---
`coil test` uses this module to call functions that have contracts with
generated inputs. Implement `Arbitrary` for your own types, or derive it with
`#[derive(Arbitrary)]` on classes and enums. A `Gen` grows its `size` from 0,
so the first failing input it finds is a small one.

---
description: "Blocking IO helpers: println, read_line, write_all, read_to_end."
---
The `io` functions return as soon as a stream is not ready. These helpers wait until the whole job is done, which is what most programs want. Inside a task, waiting lets the other tasks run.

```coil
use io::sync::{println};
use string::{format};

fn main() {
    println(format("%i items", 3))?;
}
```

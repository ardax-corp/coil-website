---
slug: "stdlib/future/Group"
package: "stdlib"
title: "Group"
description: "Tasks of one scope, handed back in the order they finish."
module: "future"
kind: "class"
name: "Group"
signature: "shared class Group<T>"
import: "use future::{Group};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/future.hy#L175"
order: 1
---

Tasks of one scope, handed back in the order they finish.

`Task::join` waits for one particular task; [`Group::next`](/packages/stdlib/reference/future/Group/next) gives whichever
finishes next, which is what every "first one wins" or "as they come"
pattern needs. A child counts as finished when it returns, panics or is
cancelled.

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/stdlib/reference/future/Group/new) | An empty group whose children run in scope `s`. |

## Methods

| Name | Description |
|------|-------------|
| [`spawn`](/packages/stdlib/reference/future/Group/spawn) | Starts `body` as a child task of the group's scope. |
| [`next`](/packages/stdlib/reference/future/Group/next) | Waits for the next child to finish and returns it; `None` once every child has been returned. |
| [`next_index`](/packages/stdlib/reference/future/Group/next_index) | Like [`next`](/packages/stdlib/reference/future/Group/next), giving the child's position in spawn order instead. |
| [`task`](/packages/stdlib/reference/future/Group/task) | The child started `i`-th (from 0). |
| [`len`](/packages/stdlib/reference/future/Group/len) | Number of children started. |
| [`pending`](/packages/stdlib/reference/future/Group/pending) | Number of children [`next`](/packages/stdlib/reference/future/Group/next) has not returned yet. |
| [`cancel_all`](/packages/stdlib/reference/future/Group/cancel_all) | Cancels every child that has not finished. |

## Examples

```coil
use future::{Group};
use task::{scope, Scope, sleep};
use tests::assert;
let r = scope(fn (Scope s) {
    let g: Group<string> = Group::new(s);
    g.spawn(fn () {
        sleep(50);
        return "slow";
    });
    g.spawn(fn () {
        sleep(1);
        return "fast";
    });
    let first = match g.next() {
        Option::Some(t) => t.join().unwrap_or(""),
        Option::None => "",
    };
    g.cancel_all();
    return first;
});
assert!(r.unwrap_or("") == "fast");
```

## See also

- [`Group::next`](/packages/stdlib/reference/future/Group/next)
- [`Promise`](/packages/stdlib/reference/future/Promise): A one-shot value that some other code sets: the resolver side of a future.

---
slug: "text/Searchable"
title: "Searchable"
description: "Pattern search methods (contains, find, split, replace_all, …) on any [Show] type, which search its display form. string has them built in, so \"foobar\".contains(\"oba\") works with a string or any other [Pattern] (such as a compiled Regex)."
module: "text"
kind: "trait"
name: "Searchable"
signature: "trait Searchable<T: Show>"
import: "use text::{Searchable};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/69c79b1dd8c070fe7ca03a71c7a372ea4cc06f82/src/text.hy#L557"
order: 2
---

Pattern search methods ([`contains`](/docs/reference/text/Searchable/contains), [`find`](/docs/reference/text/Searchable/find), [`split`](/docs/reference/text/Searchable/split), [`replace_all`](/docs/reference/text/Searchable/replace_all), …) on any [[`Show`](/docs/reference/prelude/ops/Show)] type, which search its display form. [`string`](/docs/reference/types/string) has them built in, so `"foobar".contains("oba")` works with a [`string`](/docs/reference/types/string) or any other [[`Pattern`](/docs/reference/text/Pattern)] (such as a compiled `Regex`).

Give your own type the methods with an empty instance; they search
`value.show()`:

```coil
use text::{Searchable};
use tests::assert;

class Version {
    pub major: int,
    pub minor: int,
}

impl Show for Version {
    pub fn show(Version v) -> string {
        return string::format("%i.%i", v.major, v.minor);
    }
}

impl Searchable for Version {}

fn main() {
    assert!(new Version(1, 12).starts_with("1."));
}
```

Empty matches step over one character, so an empty pattern matches
between every pair of characters (`"ab".split("")` is `["", "a", "b", ""]`).

## Required methods

| Name | Description |
|------|-------------|
| [`contains`](/docs/reference/text/Searchable/contains) | Returns `true` when `pat` matches anywhere in `hay`. |
| [`starts_with`](/docs/reference/text/Searchable/starts_with) | Returns `true` when a match of `pat` starts at the beginning of `hay`. |
| [`ends_with`](/docs/reference/text/Searchable/ends_with) | Returns `true` when a match of `pat` ends at the end of `hay`. |
| [`find`](/docs/reference/text/Searchable/find) | Returns the byte span of the first match of `pat`, or `None`. |
| [`find_all`](/docs/reference/text/Searchable/find_all) | Returns the byte spans of every non-overlapping match, left to right. |
| [`split`](/docs/reference/text/Searchable/split) | Returns the pieces of `hay` between the matches of `pat`. |
| [`split_once`](/docs/reference/text/Searchable/split_once) | Splits `hay` at the first match of `pat` into the parts before and after it. |
| [`replace_first`](/docs/reference/text/Searchable/replace_first) | Returns `hay` with its first match of `pat` replaced by `with`. |
| [`replace_all`](/docs/reference/text/Searchable/replace_all) | Returns `hay` with every non-overlapping match of `pat` replaced by `with`. |

## Examples

```coil
use text::{Searchable};
use tests::assert;
assert!("foobar".contains("oba"));
assert!("a,b,,c".split(",").len() == 4);
assert!("a-b-c".replace_all("-", "+") == "a+b+c");
```

## See also

- [`Searchable::contains`](/docs/reference/text/Searchable/contains)
- [`Searchable::find`](/docs/reference/text/Searchable/find)
- [`Searchable::split`](/docs/reference/text/Searchable/split)
- [`Searchable::replace_all`](/docs/reference/text/Searchable/replace_all)
- [`Show`](/docs/reference/prelude/ops/Show)
- [`string`](/docs/reference/types/string)
- [`text::Pattern`](/docs/reference/text/Pattern)
- [`Text`](/docs/reference/text/Text): String methods on `string`: trimming, case mapping, padding, line splitting, repeating and byte slicing.

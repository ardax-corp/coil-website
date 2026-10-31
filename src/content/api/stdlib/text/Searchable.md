---
slug: "stdlib/text/Searchable"
package: "stdlib"
title: "Searchable"
description: "Pattern search methods (contains, find, split, replace_all, …) on any [Show] type, which search its display form. string has them built in, so \"foobar\".contains(\"oba\") works with a string or any other [Pattern] (such as a compiled Regex)."
module: "text"
kind: "trait"
name: "Searchable"
signature: "trait Searchable<T: Show>"
import: "use text::{Searchable};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/text.coil#L557"
order: 2
---

Pattern search methods ([`contains`](/packages/stdlib/reference/text/Searchable/contains), [`find`](/packages/stdlib/reference/text/Searchable/find), [`split`](/packages/stdlib/reference/text/Searchable/split), [`replace_all`](/packages/stdlib/reference/text/Searchable/replace_all), …) on any [[`Show`](/docs/reference/prelude/ops/Show)] type, which search its display form. [`string`](/docs/reference/types/string) has them built in, so `"foobar".contains("oba")` works with a [`string`](/docs/reference/types/string) or any other [[`Pattern`](/packages/stdlib/reference/text/Pattern)] (such as a compiled `Regex`).

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
| [`contains`](/packages/stdlib/reference/text/Searchable/contains) | Returns `true` when `pat` matches anywhere in `hay`. |
| [`starts_with`](/packages/stdlib/reference/text/Searchable/starts_with) | Returns `true` when a match of `pat` starts at the beginning of `hay`. |
| [`ends_with`](/packages/stdlib/reference/text/Searchable/ends_with) | Returns `true` when a match of `pat` ends at the end of `hay`. |
| [`find`](/packages/stdlib/reference/text/Searchable/find) | Returns the byte span of the first match of `pat`, or `None`. |
| [`find_all`](/packages/stdlib/reference/text/Searchable/find_all) | Returns the byte spans of every non-overlapping match, left to right. |
| [`split`](/packages/stdlib/reference/text/Searchable/split) | Returns the pieces of `hay` between the matches of `pat`. |
| [`split_once`](/packages/stdlib/reference/text/Searchable/split_once) | Splits `hay` at the first match of `pat` into the parts before and after it. |
| [`replace_first`](/packages/stdlib/reference/text/Searchable/replace_first) | Returns `hay` with its first match of `pat` replaced by `with`. |
| [`replace_all`](/packages/stdlib/reference/text/Searchable/replace_all) | Returns `hay` with every non-overlapping match of `pat` replaced by `with`. |

## Examples

```coil
use text::{Searchable};
use tests::assert;
assert!("foobar".contains("oba"));
assert!("a,b,,c".split(",").len() == 4);
assert!("a-b-c".replace_all("-", "+") == "a+b+c");
```

## See also

- [`Searchable::contains`](/packages/stdlib/reference/text/Searchable/contains)
- [`Searchable::find`](/packages/stdlib/reference/text/Searchable/find)
- [`Searchable::split`](/packages/stdlib/reference/text/Searchable/split)
- [`Searchable::replace_all`](/packages/stdlib/reference/text/Searchable/replace_all)
- [`Show`](/docs/reference/prelude/ops/Show)
- [`string`](/docs/reference/types/string)
- [`text::Pattern`](/packages/stdlib/reference/text/Pattern)
- [`Text`](/packages/stdlib/reference/text/Text): String methods on `string`: trimming, case mapping, padding, line splitting, repeating and byte slicing.

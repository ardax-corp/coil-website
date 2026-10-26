use io::sync::{println};
use text::{Searchable};

gen fn lines_of(string text) {
    for line in text.split("\n") {
        yield line;
    }
}

gen fn take(coroutine<string> source, int count) {
    let left = count;
    for x in source {
        if left == 0 {
            break;
        }
        yield x;
        left--;
    }
}

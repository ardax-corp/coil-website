use io::sync::{println};
use string::{format};

fn largest<T: Ord>(Vec<T> items) -> Option<T> {
    if items.len() == 0 {
        return None;
    }
    let best = items[0];
    for item in items {
        if item > best {
            best = item;
        }
    }
    return Some(best);
}

fn main() {
    let none: Vec<int> = [];
    let words: Vec<string> = ["pear", "plum"];
    println(format("%v %v", largest(none), largest(words)))?;
}

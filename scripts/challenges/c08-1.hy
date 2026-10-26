use io::sync::{println};
use string::{format};
use collections::{sort_by};

fn count_if(Vec<int> xs, int -> bool pred) -> int {
    let n = 0;
    for x in xs {
        if pred(x) {
            n++;
        }
    }
    return n;
}

fn main() {
    let xs: Vec<int> = [1, 5, 8, 12];
    println(show(count_if(xs, fn (int x) => x > 4)))?;
    let words: Vec<string> = ["banana", "fig", "apple", "kiwi"];
    println(format("%v", sort_by(words, fn (string w) => w.len())))?;
}

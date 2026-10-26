use io::sync::{println};
use string::{format};

fn first_even(Vec<int> xs) -> Option<int> {
    for x in xs {
        if x % 2 == 0 {
            return Some(x);
        }
    }
    return None;
}

fn main() {
    println(format("%v %v", first_even([1, 3, 4, 5]), first_even([1, 3])))?;
}

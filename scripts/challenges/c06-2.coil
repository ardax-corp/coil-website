use io::sync::{println};
use string::{format};

fn divide(int a, int b) -> Option<int> {
    if b == 0 {
        return None;
    }
    return Some(a / b);
}

fn main() {
    println(format("10 / 2 = %i", divide(10, 2) ?? 0))?;
    println(format("1 / 0 = %i", divide(1, 0) ?? 0))?;
}

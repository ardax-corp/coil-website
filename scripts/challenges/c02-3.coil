use io::sync::{println};
use string::{format};

fn stats(int a, int b, int c) -> (int, int, float) {
    let low = a;
    let high = a;
    if b < low { low = b; }
    if c < low { low = c; }
    if b > high { high = b; }
    if c > high { high = c; }
    return (low, high, (a + b + c) as float / 3.0);
}

fn main() {
    let (low, high, mean) = stats(4, 9, 2);
    println(format("%i %i %f", low, high, mean))?;
}

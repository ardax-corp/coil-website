use io::sync::{println};
use string::{format};

fn average(int a, int b, int c) -> float {
    return (a + b + c) as float / 3.0;
}

fn main() {
    println(format("%f", average(1, 2, 4)))?;
}

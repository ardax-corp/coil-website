use io::sync::{println};
use string::{format};

fn sum<T: Num>(Vec<T> xs, T zero) -> T {
    let total = zero;
    for x in xs {
        total = total + x;
    }
    return total;
}

fn main() {
    let ints: Vec<int> = [1, 2, 3];
    let floats: Vec<float> = [0.5, 0.25];
    println(format("%i %f", sum(ints, 0), sum(floats, 0.0)))?;
}

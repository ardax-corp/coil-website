use io::sync::{println};
use string::{format};

fn steps(int n) -> int {
    let count = 0;
    while n != 1 {
        if n % 2 == 0 {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        count++;
    }
    return count;
}

fn main() {
    let best = 1;
    for n in 1..100 {
        if steps(n) > steps(best) {
            best = n;
        }
    }
    println(format("%i takes %i steps", best, steps(best)))?;
}

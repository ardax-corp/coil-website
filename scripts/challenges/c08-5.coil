use io::sync::{println};

fn compose(int -> int f, int -> int g) -> int -> int {
    return fn (int x) use (f, g) => g(f(x));
}

fn main() {
    let inc = fn (int x) => x + 1;
    let dbl = fn (int x) => x * 2;
    let h = compose(inc, dbl);
    println(show(h(5)))?;
}

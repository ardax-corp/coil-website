use io::sync::{println};
use string::{format};

fn fizzbuzz(int n) -> string {
    if n % 35 == 0 {
        return "FizzBuzz";
    }
    if n % 7 == 0 {
        return "Fizz";
    }
    if n % 5 == 0 {
        return "Buzz";
    }
    return format("%i", n);
}

fn main() {
    let limit = 35;
    for n in 1..=limit {
        println(fizzbuzz(n))?;
    }
}

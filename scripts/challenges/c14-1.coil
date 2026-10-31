use io::sync::{println};
use string::{format};
use thread::{spawn, join};

fn count_primes_in((int, int) range) -> int {
    let count = 0;
    for n in range[0]..range[1] {
        if n < 2 {
            continue;
        }
        let prime = true;
        let d = 2;
        while d * d <= n {
            if n % d == 0 {
                prime = false;
                break;
            }
            d++;
        }
        if prime {
            count++;
        }
    }
    return count;
}

fn parallel() -> Result<int, ThreadError> {
    let a = spawn(count_primes_in, (0, 50000))?;
    let b = spawn(count_primes_in, (50000, 100000))?;
    let c = spawn(count_primes_in, (100000, 150000))?;
    let d = spawn(count_primes_in, (150000, 200000))?;
    return Ok(join(a)? + join(b)? + join(c)? + join(d)?);
}

fn main() {
    let together = parallel().unwrap_or(-1);
    println(format("four threads: %i, one thread: %i", together, count_primes_in((0, 200000))))?;
}

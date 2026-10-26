fn smallest(Vec<int> xs) -> int {
    let m = xs[0];
    for x in xs {
        if x < m {
            m = x;
        }
    }
    return m;
}

fn largest(Vec<int> xs) -> int {
    let m = xs[0];
    for x in xs {
        if x > m {
            m = x;
        }
    }
    return m;
}

fn average(Vec<int> xs) -> int
    requires xs.len() > 0
    ensures result >= smallest(xs) && result <= largest(xs)
{
    let total = 0;
    for x in xs {
        total += x;
    }
    return total / xs.len();
}

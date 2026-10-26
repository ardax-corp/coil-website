fn highest(Vec<int> temps) -> int {
    let best = temps[0];
    for t in temps {
        if t > best {
            best = t;
        }
    }
    return best;
}

fn average(Vec<int> temps) -> float {
    let total = 0;
    for t in temps {
        total += t;
    }
    return total as float / temps.len() as float;
}

use collections::set::{HashSet};

fn dedup(Vec<int> xs) -> Vec<int> {
    let seen: HashSet<int> = HashSet::new();
    let out: Vec<int> = Vec::new();
    for x in xs {
        if !seen.contains(x) {
            seen.insert(x);
            out.push(x);
        }
    }
    return out;
}

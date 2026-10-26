use collections::set::{HashSet};

gen fn distinct_words() {
    let seen: HashSet<string> = HashSet::new();
    while true {
        let w = yield seen.len();
        seen.insert(w);
    }
}

fn last_len(Vec<string> words) -> Option<int> {
    let last = words.pop()?;
    return Some(last.len());
}

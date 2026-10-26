use io::sync::{println};
use string::{format};

class Stack<T> {
    items: Vec<T>,
}

impl Stack<T> {
    pub static fn new() -> Stack<T> {
        return new Stack(Vec::new());
    }
    pub fn push(T item) {
        self.items.push(item);
    }
    pub fn pop() -> Option<T> {
        return self.items.pop();
    }
    pub fn size() -> int {
        return self.items.len();
    }
    pub fn is_empty() -> bool {
        return self.items.len() == 0;
    }
    pub fn clear() {
        self.items.clear();
    }
}

fn main() {
    let s: Stack<int> = Stack::new();
    s.push(1);
    s.push(2);
    println(format("%z", s.is_empty()))?;
    s.clear();
    println(format("%z %v", s.is_empty(), s.pop()))?;
}

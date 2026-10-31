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
    pub fn peek() -> Option<T> {
        if self.items.len() == 0 {
            return None;
        }
        return Some(self.items[self.items.len() - 1]);
    }
}

fn main() {
    let s: Stack<string> = Stack::new();
    println(format("%v", s.peek()))?;
    s.push("a");
    s.push("b");
    println(format("%v %v %v", s.peek(), s.pop(), s.peek()))?;
}

use stack::{Stack};
use tests::assert;

test("popping an empty stack gives None") {
    let s: Stack<int> = Stack::new();
    assert!(s.pop().is_none());
}

test("items come out in reverse order") {
    let s: Stack<int> = Stack::new();
    s.push(1);
    s.push(2);
    assert!(s.pop() == Some(2));
    assert!(s.pop() == Some(1));
    assert!(s.pop() == None);
}

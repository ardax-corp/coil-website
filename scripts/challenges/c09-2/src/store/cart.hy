use store::item::{Item};

class Cart {
    pub items: Vec<Item>,
}

impl Cart {
    pub static fn new() -> Cart {
        return new Cart(Vec::new());
    }

    pub fn add(Item item) {
        self.items.push(item);
    }

    pub fn total_cents() -> int {
        let total = 0;
        for item in self.items {
            total += item.total_cents();
        }
        return total;
    }
}

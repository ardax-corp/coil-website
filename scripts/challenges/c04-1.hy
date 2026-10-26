use io::sync::{println};
use string::{format};

class Account {
    owner: string,
    balance: int,
}

impl Account {
    pub static fn open(string owner) -> Account {
        return new Account(owner, 0);
    }

    pub fn deposit(int amount) -> bool {
        if amount <= 0 {
            return false;
        }
        self.balance += amount;
        return true;
    }

    pub fn withdraw(int amount) -> bool {
        if amount <= 0 || amount > self.balance {
            return false;
        }
        self.balance -= amount;
        return true;
    }

    pub fn balance() -> int {
        return self.balance;
    }
}

fn main() {
    let a = Account::open("Ada");
    a.deposit(100);
    println(format("%z %z %z %i", a.withdraw(30), a.withdraw(500), a.withdraw(-50), a.balance()))?;
}

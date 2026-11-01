use io::sync::{println};
use string::{format};
use collections::{sort};

#[derive(Show, Eq, Ord)]
class Card {
    pub rank: int,
    pub suit: string,
}

fn main() {
    let hand: Vec<Card> = [new Card(12, "hearts"), new Card(3, "spades"), new Card(12, "clubs")];
    println(format("%v", sort(hand)))?;
}

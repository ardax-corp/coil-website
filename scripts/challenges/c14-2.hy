use io::sync::{println};
use string::{format};
use thread::{spawn, join, channel, send, recv, close, Sender, Receiver};

fn worker((Receiver<int>, Sender<int>) ends) {
    while let Ok(job) = recv(ends[0]) {
        send(ends[1], job * 10)?;
    }
}

fn run() -> Result<int, ThreadError> {
    let jobs = channel()?;
    let results = channel()?;
    let a = spawn(worker, (jobs[1], results[0]))?;
    let b = spawn(worker, (jobs[1], results[0]))?;
    let c = spawn(worker, (jobs[1], results[0]))?;
    for n in 1..=9 {
        send(jobs[0], n)?;
    }
    close(jobs[0])?;
    let total = 0;
    for i in 0..9 {
        total += recv(results[1])?;
    }
    (join(a)?)?;
    (join(b)?)?;
    (join(c)?)?;
    return Ok(total);
}

fn main() {
    println(format("total %v", run()))?;
}

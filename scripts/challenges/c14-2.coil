use io::sync::{println};
use string::{format};
use thread::{spawn, join, channel, send, recv, close, Sender, Receiver, Thread};

fn worker((Receiver<int>, Sender<int>) ends) {
    while let Ok(job) = recv(ends[0]) {
        send(ends[1], job * 10)?;
    }
}

// spawn and join fail with ThreadError, the channel calls with
// ChannelError, so the workers are started and joined here.
fn start((Receiver<int>, Sender<int>) ends) -> Vec<Thread<Result<unit, ChannelError>>> {
    let workers: Vec<Thread<Result<unit, ChannelError>>> = Vec::new();
    for i in 0..3 {
        match spawn(worker, ends) {
            Ok(t) => workers.push(t),
            Err(_) => {},
        }
    }
    return workers;
}

fn run() -> Result<int, ChannelError> {
    let jobs = channel()?;
    let results = channel()?;
    let workers = start((jobs[1], results[0]));
    for n in 1..=9 {
        send(jobs[0], n)?;
    }
    close(jobs[0])?;
    let total = 0;
    for i in 0..9 {
        total += recv(results[1])?;
    }
    for t in workers {
        let _ = join(t);
    }
    return Ok(total);
}

fn main() {
    println(format("total %v", run()))?;
}

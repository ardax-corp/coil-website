gen fn running_average() {
    let total = 0.0;
    let count = 0.0;
    while true {
        let mean = 0.0;
        if count > 0.0 {
            mean = total / count;
        }
        let x = yield mean;
        total += x;
        count += 1.0;
    }
}

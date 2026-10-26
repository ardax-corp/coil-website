// Runs coil programs in a Web Worker. Each Runner owns one worker, replaced
// when a run times out or is stopped. Programs run on the default runner;
// `analysis` is a second one for live diagnostics and the Inspect panel, so
// checking code never waits behind (or stops) a running program.
//
//   const r = await runProgram({ files: { "main.hy": src }, onOutput })
//   r.code       exit status (undefined when stopped or timed out)
//   r.timedOut   true when the time limit stopped it

class Runner {
  worker;
  busy = Promise.resolve();
  stopCurrent;
  everReady = false;

  fresh() {
    this.worker?.terminate();
    this.worker = new Worker(new URL("./worker.mjs", import.meta.url), { type: "module" });
    return this.worker;
  }

  /** Stops the running command, if any. */
  stop() {
    this.stopCurrent?.();
  }

  /**
   * Runs one coil command. Runs queue behind each other.
   * onOutput(stream, text) gets "stdout"/"stderr" chunks; onStatus(state)
   * gets "loading" while the compiler downloads (the first time), "starting",
   * and "running" once it starts.
   */
  run({ files, args, stdin = "", timeoutMs = 15000, onOutput, onStatus }) {
    const run = this.busy.then(
      () =>
        new Promise((resolve) => {
          const w = this.worker ?? this.fresh();
          let timer;
          const finish = (result) => {
            clearTimeout(timer);
            this.stopCurrent = undefined;
            w.onmessage = null;
            resolve(result);
          };
          const kill = (why) => {
            this.fresh();
            finish({ code: undefined, [why]: true });
          };
          this.stopCurrent = () => kill("stopped");
          onStatus?.(this.everReady ? "starting" : "loading");
          w.onmessage = ({ data }) => {
            if (data.type === "ready") {
              this.everReady = true;
              onStatus?.("running");
              timer = setTimeout(() => kill("timedOut"), timeoutMs);
            } else if (data.type === "out") onOutput?.(data.stream, data.text);
            else if (data.type === "exit") finish({ code: data.code });
            else if (data.type === "error") finish({ code: undefined, error: data.message });
          };
          w.postMessage({ type: "run", files, args, stdin });
        }),
    );
    this.busy = run.catch(() => {});
    return run;
  }

  /** Fetches the compiler ahead of the first run (e.g. on hover). */
  warmUp() {
    if (this.worker) return;
    this.fresh().postMessage({ type: "load" });
  }
}

const programs = new Runner();

/** The runner for diagnostics and dissect output. */
export const analysis = new Runner();

export const runProgram = (options) => programs.run(options);
export const stop = () => programs.stop();
export const warmUp = () => programs.warmUp();

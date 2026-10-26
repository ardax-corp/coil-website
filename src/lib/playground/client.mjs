// Runs coil programs in a Web Worker. One worker serves the whole page and
// is replaced when a run times out or is stopped.
//
//   const r = await runProgram({ files: { "main.hy": src }, onOutput })
//   r.code       exit status (undefined when stopped or timed out)
//   r.timedOut   true when the time limit stopped it

let worker;
let busy = Promise.resolve();

function fresh() {
  worker?.terminate();
  worker = new Worker(new URL("./worker.mjs", import.meta.url), { type: "module" });
  return worker;
}

let stopCurrent;
let everReady = false;

/** Stops the running program, if any. */
export function stop() {
  stopCurrent?.();
}

/**
 * Runs one coil command. Runs queue behind each other.
 * onOutput(stream, text) gets "stdout"/"stderr" chunks; onStatus(state)
 * gets "loading" while the compiler downloads (the first time), "starting",
 * and "running" once it starts.
 */
export function runProgram({ files, args, stdin = "", timeoutMs = 15000, onOutput, onStatus }) {
  const run = busy.then(
    () =>
      new Promise((resolve) => {
        const w = worker ?? fresh();
        let timer;
        const finish = (result) => {
          clearTimeout(timer);
          stopCurrent = undefined;
          w.onmessage = null;
          resolve(result);
        };
        const kill = (why) => {
          fresh();
          finish({ code: undefined, [why]: true });
        };
        stopCurrent = () => kill("stopped");
        onStatus?.(everReady ? "starting" : "loading");
        w.onmessage = ({ data }) => {
          if (data.type === "ready") {
            everReady = true;
            onStatus?.("running");
            timer = setTimeout(() => kill("timedOut"), timeoutMs);
          } else if (data.type === "out") onOutput?.(data.stream, data.text);
          else if (data.type === "exit") finish({ code: data.code });
          else if (data.type === "error") finish({ code: undefined, error: data.message });
        };
        w.postMessage({ type: "run", files, args, stdin });
      }),
  );
  busy = run.catch(() => {});
  return run;
}

/** Fetches the compiler ahead of the first run (e.g. on hover). */
export function warmUp() {
  if (worker) return;
  fresh().postMessage({ type: "load" });
}

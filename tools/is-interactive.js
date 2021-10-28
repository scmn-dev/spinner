import * as process from "process";

export function isInteractive({ stream = process.stdout } = {}) {
  return Boolean(
    stream &&
      stream.isTTY &&
      process.env.TERM !== "dumb" &&
      !("CI" in process.env)
  );
}

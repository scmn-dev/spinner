import * as process from "process";
import { onetime } from "../tools/onetime"
import signalExit from "signal-exit";

export const restoreCursor = onetime(() => {
  signalExit(
    () => {
      process.stderr.write("\u001B[?25h");
    },
    { alwaysLast: true }
  );
});

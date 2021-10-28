const process = require("process");
const onetime = require("../tools/onetime");
const signalExit = require("signal-exit");

const restoreCursor = onetime(() => {
  signalExit(
    () => {
      process.stderr.write("\u001B[?25h");
    },
    { alwaysLast: true }
  );
});

module.exports.restoreCursor = restoreCursor;

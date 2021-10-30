# spinner

> simple spinner for secman cli.

## Usage

```js
import { spinner } from "@secman/spinner";

const loading = spinner("Loading ...").start();

// stop
loading.stop();

// success message
loading.succeed("Done");

// fail message
loading.fail("Failed");
```

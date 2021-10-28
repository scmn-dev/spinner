export function spnr(options: any): Spinner;
export function spnrPromise(action: any, options: any): Promise<any>;

export namespace cliCursor {
  function show(writableStream?: any): void;
  function hide(writableStream?: any): void;
  function toggle(force: any, writableStream: any): void;
}

declare class Spinner {
  constructor(options: any);
  options: any;
  set spinner(arg: any);
  get spinner(): any;
  color: any;
  hideCursor: boolean;
  interval: any;
  stream: any;
  id: NodeJS.Timer;
  set isEnabled(arg: boolean);
  get isEnabled(): boolean;
  set isSilent(arg: any);
  get isSilent(): any;
  set text(arg: any);
  get text(): any;
  set prefixText(arg: any);
  get prefixText(): any;
  linesToClear: number;
  set indent(arg: any);
  get indent(): any;
  discardStdin: any;
  isDiscardingStdin: boolean;
  _indent: any;
  _updateInterval(interval: any): void;
  frameIndex: any;
  _spinner: any;
  get isSpinning(): boolean;
  getFullPrefixText(prefixText?: any, postfix?: string): string;
  updateLineCount(): void;
  lineCount: number;
  _isEnabled: any;
  _isSilent: any;
  frame(): string;
  clear(): Spinner;
  lastIndent: any;
  render(): Spinner;
  start(): Spinner;
  stop(): Spinner;
  succeed(text: any): Spinner;
  fail(text: any): Spinner;
  warn(text: any): Spinner;
  info(text: any): Spinner;
  stopAndPersist(options?: {}): Spinner;
  [TEXT]: any;
  [PREFIX_TEXT]: any;
}

declare const TEXT: unique symbol;
declare const PREFIX_TEXT: unique symbol;
export {};

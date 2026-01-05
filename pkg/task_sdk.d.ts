/* tslint:disable */
/* eslint-disable */

export class Task {
  private constructor();
  free(): void;
  [Symbol.dispose](): void;
  id: number;
  completed: boolean;
  readonly description: string;
}

export class TaskManager {
  free(): void;
  [Symbol.dispose](): void;
  get_tasks_json(): string;
  constructor();
  add_task(description: string): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_get_task_completed: (a: number) => number;
  readonly __wbg_get_task_id: (a: number) => number;
  readonly __wbg_set_task_completed: (a: number, b: number) => void;
  readonly __wbg_set_task_id: (a: number, b: number) => void;
  readonly __wbg_task_free: (a: number, b: number) => void;
  readonly __wbg_taskmanager_free: (a: number, b: number) => void;
  readonly task_description: (a: number) => [number, number];
  readonly taskmanager_add_task: (a: number, b: number, c: number) => void;
  readonly taskmanager_get_tasks_json: (a: number) => [number, number];
  readonly taskmanager_new: () => number;
  readonly __wbindgen_externrefs: WebAssembly.Table;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;

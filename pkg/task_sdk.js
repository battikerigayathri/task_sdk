import * as wasm from "./task_sdk_bg.wasm";
export * from "./task_sdk_bg.js";
import { __wbg_set_wasm } from "./task_sdk_bg.js";
__wbg_set_wasm(wasm);
wasm.__wbindgen_start();

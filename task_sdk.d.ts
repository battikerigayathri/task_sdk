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
  delete_task(id: number): boolean;
  toggle_task(id: number): boolean;
  get_tasks_json(): string;
  load_tasks_from_json(json: string): boolean;
  constructor();
  add_task(description: string): void;
}

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

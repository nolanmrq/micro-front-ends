import {InjectionToken} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Todo} from "./models/todo";

export const TODO_STORE = new InjectionToken('Service de stockage des todos', {
  providedIn: 'root',
  factory: () => new TodoStoreService()
})

export interface TodoStore {
  get todos(): Observable<Todo[]>;
  save(todo: Todo): void;
  check(todo: Todo): void;
  uncheck(todo: Todo): void;
  delete(todo: Todo): void;
}

class TodoStoreService implements TodoStore {

  private _todos = new BehaviorSubject<Todo[]>([]);

  constructor() { }

  get todos(): Observable<Todo[]> {
    return this._todos.asObservable();
  }
  save(todo: Todo): void {
    this._todos.next([todo, ...this._todos.value]);
  }
  check(todo: Todo): void {
    todo.done = true;
  }
  uncheck(todo: Todo): void {
    todo.done = false;
  }
  delete(todo: Todo): void {
    const todos = this._todos.value;
    const index = todos.findIndex(_todo => _todo === todo);
    if (index >= 0) {
      todos.splice(index, 1);
      this._todos.next(todos);
    }
  }
}

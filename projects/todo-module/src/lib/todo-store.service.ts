import {InjectionToken} from '@angular/core';
import {BehaviorSubject, count, Observable} from "rxjs";
import {Todo} from "./models/todo";

export const TODO_STORE = new InjectionToken<TodoStore>('Service de stockage des todos', {
  providedIn: 'root',
  factory: () => new TodoStoreImpl()
})

export abstract class TodoStore {

  private count = 0;
  protected _todos = new BehaviorSubject<Todo[]>([]);

  constructor() { }

  get todos(): Observable<Todo[]> {
    return this._todos.asObservable();
  }
  save(todo: Todo): void {
    const update = this._todos.value.find(_todo => _todo.id === todo.id);
    if (update) {
      update.title = todo.title;
      update.text = todo.text;
    } else {
      this.count++;
      todo.id = this.count;
      this._todos.next([todo, ...this._todos.value]);
    }
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

class TodoStoreImpl extends TodoStore {}

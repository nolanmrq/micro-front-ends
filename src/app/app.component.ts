import {Component, Inject, Injectable} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LOGGER, LogModuleComponent, Logger} from 'log-module';
import {TODO_STORE, TodoFormComponent, TodoListComponent, TodoStore, Todo} from 'todo-module';

@Injectable({providedIn: 'root'})
class TodoStoreService extends TodoStore {

  constructor(
    @Inject(LOGGER) public logger: Logger
  ) {
    super();
  }

  override check(todo: Todo) {
    super.check(todo);
    this.logger.log = `Todo #${todo.id} "${todo.title}" done`;
  }

  override uncheck(todo: Todo) {
    super.uncheck(todo);
    this.logger.log = `Todo #${todo.id} "${todo.title}" undone`;
  }

  override delete(todo: Todo) {
    super.delete(todo);
    this.logger.log = `Todo #${todo.id} "${todo.title}" deleted`;
  }

  override save(todo: Todo) {
    super.save(todo);
    this.logger.log = `Todo #${todo.id} "${todo.title}" added`;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LogModuleComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  providers: [
    {
      provide: TODO_STORE,
      useClass: TodoStoreService
    }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(
    @Inject(TODO_STORE) public store: TodoStore
  ) {
  }
}

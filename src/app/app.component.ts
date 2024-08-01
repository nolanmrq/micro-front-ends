import {Component, Inject, Injectable} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LOGGER, Logger, LogModuleComponent} from 'log-module';
import {TODO_STORE, TodoFormComponent, TodoListComponent, TodoStore} from 'todo-module';
import {Column, KanbanModuleComponent, KANBAN_ITEM_COMPONENT} from "kanban-module";
import {Task} from "./models/task";
import {DRAG_N_DROP_CONTEXT} from "dragndrop-module";
import {KanbanItemComponent} from "./components/kanban-item/kanban-item.component";

export const COLUMN_TODO = new Column<Task>('TODO');
export const COLUMN_DONE = new Column<Task>('DONE');
export const COLUMN_ARCHIVE = new Column<Task>('ARCHIVE');

@Injectable({providedIn: 'root'})
class TaskService extends TodoStore {

  constructor(
    @Inject(LOGGER) public logger: Logger
  ) {
    super();
  }

  override check(task: Task) {
    super.check(task);
    this.logger.log = `Todo #${task.id} "${task.title}" done`;
  }

  override uncheck(task: Task) {
    super.uncheck(task);
    this.logger.log = `Todo #${task.id} "${task.title}" undone`;
  }

  override delete(task: Task) {
    super.delete(task);
    this.logger.log = `Todo #${task.id} "${task.title}" deleted`;
  }

  override save(task: Task) {
    super.save(task);
    this.logger.log = `Todo #${task.id} "${task.title}" added`;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LogModuleComponent,
    TodoFormComponent,
    TodoListComponent,
    KanbanModuleComponent
  ],
  providers: [
    {
      provide: TODO_STORE,
      useClass: TaskService
    },
    {
      provide: DRAG_N_DROP_CONTEXT,
      useValue: 'task-context'
    },
    {
      provide: KANBAN_ITEM_COMPONENT,
      useValue: KanbanItemComponent
    }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  columns: Column<Task>[] = [COLUMN_TODO, COLUMN_DONE, COLUMN_ARCHIVE];

  constructor(
    @Inject(TODO_STORE) public store: TodoStore
  ) {}
}

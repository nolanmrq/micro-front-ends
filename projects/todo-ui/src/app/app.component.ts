import {Component, Inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TODO_STORE, TodoStore, TodoListComponent, TodoFormComponent} from "todo-module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoListComponent,
    TodoFormComponent
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

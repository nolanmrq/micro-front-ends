import {Component, Inject} from '@angular/core';
import {
  MatList,
  MatListItemLine,
  MatListItemMeta,
  MatListItemTitle,
  MatListOption,
  MatSelectionList
} from "@angular/material/list";
import {TODO_STORE, TodoStore} from "../../todo-store.service";
import {AsyncPipe} from "@angular/common";
import {Todo} from "../../models/todo";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'lib-todo-list',
  standalone: true,
  imports: [
    MatList,
    MatSelectionList,
    MatListOption,
    AsyncPipe,
    MatListItemTitle,
    MatListItemLine,
    MatListItemMeta,
    MatButton
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  constructor(
    @Inject(TODO_STORE) public store: TodoStore
  ) { }

  toggleDone(todo: Todo) {
    todo.done ? this.store.uncheck(todo) : this.store.check(todo);
  }

}

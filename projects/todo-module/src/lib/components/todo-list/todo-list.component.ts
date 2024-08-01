import {AfterViewInit, Component, Inject, Optional, ViewChild} from '@angular/core';
import {
  MatList, MatListItem,
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
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {DRAG_N_DROP_CONTEXT, DRAG_N_DROP_PROVIDER_FACTORY, DragNDropProviderFactory} from "dragndrop-module";
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";

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
    MatButton,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatListItem,
    CdkDrag,
    CdkDropList
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements AfterViewInit {

  @ViewChild(CdkDropList) cdkDropList!: CdkDropList

  constructor(
    @Inject(TODO_STORE) public store: TodoStore,
    @Inject(DRAG_N_DROP_PROVIDER_FACTORY) private dragNDropProviderFactory: DragNDropProviderFactory,
    @Optional() @Inject(DRAG_N_DROP_CONTEXT) private dragNDropContext?: string
  ) { }

  ngAfterViewInit(): void {
    if (this.dragNDropContext) {
      this.dragNDropProviderFactory.createIfNotExistAndGet(this.dragNDropContext).registerDropList(this.cdkDropList);
    }
  }

  toggleDone(todo: Todo) {
    todo.done ? this.store.uncheck(todo) : this.store.check(todo);
  }

}

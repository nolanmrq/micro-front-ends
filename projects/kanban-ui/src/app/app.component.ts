import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KanbanModuleComponent, Column, KANBAN_ITEM_COMPONENT } from 'kanban-module';
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";
import {DRAG_N_DROP_CONTEXT} from "dragndrop-module";
import {Task} from "./models/task";
import {SplitKanbanComponent} from "./components/split-kanban/split-kanban.component";
import {KanbanItemComponent} from "./components/kanban-item/kanban-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    KanbanModuleComponent,
    CdkDropList,
    CdkDrag,
    SplitKanbanComponent
  ],
  providers: [
    {
      provide: DRAG_N_DROP_CONTEXT,
      useValue: 'kanban-context'
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
  columns: Column<Task>[] = [];

  constructor() {
    const item1 = new Task(1);
    const item2 = new Task(2);
    const item3 = new Task(3);
    const item4 = new Task(4);
    this.columns.push(new Column('TASKS', [item1, item2, item3]));
    this.columns.push(new Column('TODO', [item4]));
    this.columns.push(new Column('DONE'));
  }
}

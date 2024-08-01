import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KanbanModuleComponent, Column, Item } from 'kanban-module';
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";

class Task extends Item {
  constructor(id: number) {
    super();
    this.id = id;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KanbanModuleComponent, CdkDropList, CdkDrag],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  columns: Column<Task>[] = [];
  columns1: Column<Task>;
  columns2: Column<Task>;
  columns3: Column<Task>;

  constructor() {
    const item1 = new Task(1);
    const item2 = new Task(2);
    const item3 = new Task(3);
    const item4 = new Task(4);
    this.columns.push(new Column('TASKS', [item1, item2, item3]));
    this.columns.push(new Column('TODO', [item4]));
    this.columns.push(new Column('DONE'));
    this.columns1 = new Column('TASKS_BIS');
    this.columns2 = new Column('TODO_BIS', [item3, item4]);
    this.columns3 = new Column('DONE_BIS', [item1, item2]);
  }
}

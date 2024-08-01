import {Component} from '@angular/core';
import {Column, KanbanModuleComponent} from "kanban-module";
import {Task} from "../../models/task";
import {DRAG_N_DROP_CONTEXT} from "dragndrop-module";

@Component({
  selector: 'app-split-kanban',
  standalone: true,
  imports: [
    KanbanModuleComponent
  ],
  providers: [
    {
      provide: DRAG_N_DROP_CONTEXT,
      useValue: 'split-kanban-context'
    }
  ],
  templateUrl: './split-kanban.component.html',
  styleUrl: './split-kanban.component.scss'
})
export class SplitKanbanComponent {
  item1 = new Task(1);
  item2 = new Task(2);
  item3 = new Task(3);
  item4 = new Task(4);
  columns1 = new Column('TASKS_BIS');
  columns2 = new Column('TODO_BIS', [this.item3, this.item4]);
  columns3 = new Column('DONE_BIS', [this.item1, this.item2]);

}

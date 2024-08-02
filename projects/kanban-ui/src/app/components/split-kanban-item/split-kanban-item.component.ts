import {Component, input} from '@angular/core';
import {ItemComponent} from "kanban-module";
import {Task} from "../../models/task";

@Component({
  selector: 'app-split-kanban-item',
  standalone: true,
  imports: [],
  templateUrl: './split-kanban-item.component.html',
  styleUrl: './split-kanban-item.component.scss'
})
export class SplitKanbanItemComponent implements ItemComponent<Task> {
  item = input.required<Task>();
}

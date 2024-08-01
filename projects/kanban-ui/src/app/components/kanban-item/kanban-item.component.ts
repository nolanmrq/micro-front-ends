import {Component, input} from '@angular/core';
import {ItemComponent} from "kanban-module";
import {Task} from "../../models/task";

@Component({
  selector: 'app-kanban-item',
  standalone: true,
  imports: [],
  templateUrl: './kanban-item.component.html',
  styleUrl: './kanban-item.component.scss'
})
export class KanbanItemComponent implements ItemComponent<Task> {
  item = input.required<Task>();
}

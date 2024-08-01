import {Component, input} from '@angular/core';
import {Column} from "./models/column";
import {Item} from "./models/item";
import {KanbanColumnComponent} from "./components/kanban-column/kanban-column.component";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'lib-kanban-module',
  standalone: true,
  imports: [
    KanbanColumnComponent,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent
  ],
  templateUrl: 'kanban-module.component.html',
  styleUrl: 'kanban-module.component.scss'
})
export class KanbanModuleComponent<T extends Item> {

  columns = input.required<Column<T>[]>();
  contextId = input.required<string>();

}

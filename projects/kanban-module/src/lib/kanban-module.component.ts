import {Component, InjectionToken, input, InputSignal, Type} from '@angular/core';
import {Column} from "./models/column";
import {Item} from "./models/item";
import {KanbanColumnComponent} from "./components/kanban-column/kanban-column.component";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";


export interface ItemComponent<T extends Item> {
  item: InputSignal<T> | T
}

export const KANBAN_ITEM_COMPONENT = new InjectionToken<Type<ItemComponent<Item>>>('Component for display kanban item')


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

}

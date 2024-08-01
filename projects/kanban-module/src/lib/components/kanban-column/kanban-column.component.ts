import {AfterViewInit, Component, Inject, input, Optional, Type, ViewChild} from '@angular/core';
import {Column} from "../../models/column";
import {Item} from "../../models/item";
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {
  DRAG_N_DROP_CONTEXT,
  DRAG_N_DROP_PROVIDER_FACTORY,
  DragNDropProviderFactory
} from 'dragndrop-module';
import {NgComponentOutlet} from "@angular/common";
import {ItemComponent, KANBAN_ITEM_COMPONENT} from "../../kanban-module.component";

@Component({
  selector: 'lib-kanban-column',
  standalone: true,
  imports: [
    CdkDropList,
    CdkDrag,
    NgComponentOutlet
  ],
  templateUrl: './kanban-column.component.html',
  styleUrl: 'kanban-column.component.scss'
})
export class KanbanColumnComponent<T extends Item> implements AfterViewInit {

  id = input.required<string>();
  column = input.required<Column<T>>();

  @ViewChild(CdkDropList) cdkDropList!: CdkDropList;

  constructor(
    @Inject(DRAG_N_DROP_PROVIDER_FACTORY) private dragNDropProviderFactory: DragNDropProviderFactory,
    @Inject(KANBAN_ITEM_COMPONENT) public component: Type<ItemComponent<T>>,
    @Optional() @Inject(DRAG_N_DROP_CONTEXT) private dragNDropContext?: string
  ) {
  }

  ngAfterViewInit(): void {
    console.log(this.dragNDropContext);
    if (this.dragNDropContext) {
      this.dragNDropProviderFactory.createIfNotExistAndGet(this.dragNDropContext).registerDropList(this.cdkDropList);
    }
  }


  drop(event: CdkDragDrop<T[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}

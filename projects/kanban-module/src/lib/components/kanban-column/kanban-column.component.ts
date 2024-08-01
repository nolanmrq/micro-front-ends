import {AfterViewInit, Component, Inject, input, OnInit, ViewChild} from '@angular/core';
import {Column} from "../../models/column";
import {Item} from "../../models/item";
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {DRAG_N_DROP_PROVIDER_FACTORY, DragNDropProviderFactory} from 'dragndrop-module';

@Component({
  selector: 'lib-kanban-column',
  standalone: true,
  imports: [
    CdkDropList,
    CdkDrag
  ],
  templateUrl: './kanban-column.component.html',
  styleUrl: 'kanban-column.component.scss'
})
export class KanbanColumnComponent<T extends Item> implements AfterViewInit {

  id = input.required<string>();
  column = input.required<Column<T>>();
  contextId = input.required<string>();

  @ViewChild(CdkDropList) cdkDropList!: CdkDropList;

  constructor(
    @Inject(DRAG_N_DROP_PROVIDER_FACTORY) private dragNDropProviderFactory: DragNDropProviderFactory
  ) {
  }

  ngAfterViewInit(): void {
    this.dragNDropProviderFactory.createIfNotExistAndGet(this.contextId()).registerDropList(this.cdkDropList);
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

import {Column, Item} from "kanban-module";

export class Task implements Item {
  id: number;
  column?: Column<Task>;

  constructor(id: number) {
    this.id = id;
  }
}

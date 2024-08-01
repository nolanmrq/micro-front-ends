import {Item} from "kanban-module";

export class Task extends Item {
  constructor(id: number) {
    super();
    this.id = id;
  }
}

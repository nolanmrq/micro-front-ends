import {Todo} from "todo-module";
import {Column, Item} from "kanban-module";

export class Task extends Todo implements Item {
  column?: Column<Task>;

  constructor(id: number, title: string | null, text: string) {
    super(id, title, text);
  }
}

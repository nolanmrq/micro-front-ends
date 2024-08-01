import {Item} from "./item";

export class Column<T extends Item> {
  label: string;
  items: T[];

  constructor(label: string, items: T[] = []) {
    this.label = label;
    this.items = items;
  }
}

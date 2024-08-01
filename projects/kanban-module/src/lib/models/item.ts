import {Column} from "./column";

export abstract class Item {
  id!: number;
  column?: Column<this>
}

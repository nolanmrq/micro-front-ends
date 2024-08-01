import {Column} from "./column";

export interface Item {
  id: number;
  column?: Column<Item>;
}

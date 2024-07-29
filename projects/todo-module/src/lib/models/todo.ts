export class Todo {
  id: number;
  title: string;
  text: string;
  done = false;

  constructor(id: number, title: string | null, text: string) {
    this.id = id;
    this.title = title ?? text.length > 10 ? `${text.slice(0, 10)}...` : text;
    this.text = text;
  }
}

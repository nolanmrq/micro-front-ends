import {Component, effect, input, output, Signal} from '@angular/core';
import {Todo} from "../../models/todo";
import {TodoStore} from "../../todo-store.service";
import {FormControl, FormGroup, NonNullableFormBuilder} from "@angular/forms";

@Component({
  selector: 'lib-todo-form',
  standalone: true,
  imports: [],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {

  todo = input<Todo>();
  save = output<Todo>();
  form!: FormGroup<{
    title: FormControl<string>,
    text: FormControl<string>
  }>;

  constructor(
    private fb: NonNullableFormBuilder
  ) {
    effect(() => {
      this.form = this.fb.group({
        title: this.fb.control(this.todo()?.title ?? ''),
        text: this.fb.control(this.todo()?.text ?? '')
      });
    });
  }

  submit() {
    this.save.emit(new Todo(
      this.todo()?.id ?? -1,
      this.form.value.title as string,
      this.form.value.text as string
    ));
  }

}

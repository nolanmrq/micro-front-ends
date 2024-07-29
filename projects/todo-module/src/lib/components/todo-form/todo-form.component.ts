import {Component, effect, input, output, Signal} from '@angular/core';
import {Todo} from "../../models/todo";
import {TodoStore} from "../../todo-store.service";
import {FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'lib-todo-form',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatLabel,
    MatHint
  ],
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
    this.buildForm();
    effect(() => {
      this.buildForm(this.todo())
    });
  }

  private buildForm(todo?: Todo) {
    this.form = this.fb.group({
      title: this.fb.control(todo?.title ?? ''),
      text: this.fb.control(todo?.text ?? '')
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

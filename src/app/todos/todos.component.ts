import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  variable = 'Valor';
  text;

  todoText;

  constructor() { }

  todos;

  ngOnInit() {
    this.todos = [
      {text: "hacer la compra"},
      {text: "revisar el coche"}
    ];
  }

  todo;
  addTodo() {
  //console.log(this);
    let mitodo = {text: this.todoText};
    this.todos.push(mitodo);
  }

}

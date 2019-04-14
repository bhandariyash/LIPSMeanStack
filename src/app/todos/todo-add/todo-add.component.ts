import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ITodo } from '../services/todo';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  pattern = "^[a-zA-Z0-9]+$";
  @Output() addTodo: EventEmitter<ITodo> = new EventEmitter<ITodo>();
  @Output() updateTodo: EventEmitter<ITodo> = new EventEmitter<ITodo>();

  @Input() todo: ITodo;
  
  constructor() { }

  ngOnInit() {
  }

  addTask() {
    this.todo.id > 0 ? this.updateTodo.emit(this.todo)
    :this.addTodo.emit(this.todo);
  }
}

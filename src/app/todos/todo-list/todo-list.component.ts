import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../services/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  @Output() selectedTask: EventEmitter<ITodo> = new EventEmitter<ITodo>();
  @Output() removeTask: EventEmitter<ITodo> = new EventEmitter<ITodo>();
  @Input() todoList: Array<ITodo> = [];
  constructor() { }

  ngOnInit() {
  }

  editTask(task: ITodo) {
    this.selectedTask.emit(task);
  }
  deleteTask(task: ITodo) {
    this.removeTask.emit(task);
  }
}

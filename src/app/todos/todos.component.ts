import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from './services/todo.service';
import { ITodo } from './services/todo';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpEventType} from '@angular/common/http';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {

  totalData: number = 0;
  listSubscription: Subscription;
  list: ITodo[] = [];
  task: ITodo = {
    id: 0,
    userId: 0,
    title: '',
    completed: false
  };

  constructor(private todoService: TodoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadTask();
  }

  loadTask() {
    this.route.data.subscribe((result) => {
      this.list = result['todoList'];
      this.todoService.getPhotos().subscribe((result) => {
        console.log(result)
        if(result.type == HttpEventType.DownloadProgress) {
          this.totalData += result.loaded;
        }
      })
    })
    //this.listSubscription = this.todoService.getTodoList().subscribe((data) => this.list = data);
  }

  addTodo(todo: ITodo) {
    this.todoService.addTodo(todo).subscribe((data) => {
      console.log('Task added');
      console.log(data);
      this.loadTask();
    }, (err) => console.log(err))
  };

  currentTask(task: ITodo) {
    this.task = task;
  }

  updateTask(task: ITodo) {
    this.todoService.updateTodo(task).subscribe((data) => this.loadTask(),
      (err) => console.log(err));
  }

  deleteTask(task: ITodo) {
    this.todoService.deleteTodo(task).subscribe((data) => this.loadTask(),
      (err) => console.log(err));
  }

  ngOnDestroy(): void {
  }
  noop() {

  }
}

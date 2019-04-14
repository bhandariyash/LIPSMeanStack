import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITodo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodoList(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  addTodo(todo: ITodo) {
    return this.http.post<ITodo>('https://jsonplaceholder.typicode.com/todos', todo);
  }

  updateTodo(todo: ITodo) {
    return this.http.put<ITodo>('https://jsonplaceholder.typicode.com/todos/'+todo.id, todo);
  }

  deleteTodo(todo: ITodo) {
    return this.http.delete<ITodo>('https://jsonplaceholder.typicode.com/todos/'+todo.id);
  }
}

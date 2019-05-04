import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITodo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodoList(): Observable<ITodo[]> {
    const header = new HttpHeaders().set('x-access-token', 'asfds');
    return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos', {headers: header});
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

  getPhotos() {
    const request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/todos/', null,
    {
      reportProgress: true
    });

    return this.http.request(request);
  }
}

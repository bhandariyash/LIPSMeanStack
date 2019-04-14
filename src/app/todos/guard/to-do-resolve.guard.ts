import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ITodo } from '../services/todo';
import { TodoService } from '../services/todo.service'

@Injectable({
  providedIn: 'root'
})
export class ToDoResolveGuard implements Resolve<ITodo[]> {
  
  constructor(private todoService: TodoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITodo[]> {
    return this.todoService.getTodoList();
  }
}

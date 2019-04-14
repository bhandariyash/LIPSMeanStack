import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { AuthGuard } from '../guard/auth.guard';
import { ToDoResolveGuard } from './guard/to-do-resolve.guard';

const routes: Routes = [
  {
    path: '', component: TodosComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    resolve: {
      todoList: ToDoResolveGuard
    },
    children: [
      { path: ':id', component: TodoDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }

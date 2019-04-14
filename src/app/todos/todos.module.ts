import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

@NgModule({
  declarations: [
    TodosComponent,
    TodoListComponent,
    TodoAddComponent,
    TodoDetailsComponent
  ],

  imports: [
    SharedModule,
    TodosRoutingModule,
  ]
})
export class TodosModule { }

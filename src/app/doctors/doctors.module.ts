import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsComponent } from './doctors.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DoctorsComponent, 
    DoctorsListComponent
  ],
  imports: [
    SharedModule,
    DoctorsRoutingModule 
  ]
})
export class DoctorsModule { }

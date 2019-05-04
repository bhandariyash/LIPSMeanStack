import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { DoctorsComponent } from '../doctors/doctors.component';
import { EmployeeComponent } from '../employee/employee.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PatientComponent } from '../patient/patient.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../guard/auth.guard';
import { RoomComponent } from '../room/room.component';
import { PatientRegistrationComponent } from '../patient/patient-registration/patient-registration.component';
import { HospitalInfoComponent } from '../hospital-info/hospital-info.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent}, 
      {path: 'todo', loadChildren: '../todos/todos.module#TodosModule', canLoad: [AuthGuard]}, 
      {path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard]},
      {path: 'hospital', component: HospitalInfoComponent},
      {path: 'doctor', component: DoctorsComponent, canActivate: [AuthGuard]},
      {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
      {path: 'patient', component: PatientRegistrationComponent, canDeactivate: [AuthGuard]},
      {path: 'room', component: RoomComponent, canActivate: [AuthGuard]},
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: '**', component: PagenotfoundComponent} 
    ]),
  ],
  exports: [RouterModule]
})
export class RoutingModule { }

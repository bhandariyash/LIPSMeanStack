import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HospitalInfoComponent } from './hospital-info/hospital-info.component';
import { InsuranceProviderComponent } from './hospital-info/insurance-provider/insurance-provider.component';
import { RoomComponent } from './room/room.component';
import { RoomListComponent } from './room/room-list/room-list.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpListComponent } from './employee/emp-list/emp-list.component';
import { PatientComponent } from './patient/patient.component';
import { PostsComponent } from './posts/posts.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { RoutingModule } from './routing/routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TodosModule } from './todos/todos.module';
import { DoctorsModule } from './doctors/doctors.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HospitalInfoComponent,
    InsuranceProviderComponent,
    RoomComponent,
    RoomListComponent,
    DashboardComponent,
    EmpListComponent,
    PatientComponent,
    PostsComponent,
    PostsListComponent,
    MainNavComponent,
    PagenotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    DoctorsModule,
    RoutingModule
  ],
  entryComponents: [HeaderComponent], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

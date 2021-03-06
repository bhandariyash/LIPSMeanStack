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
import { DoctorsModule } from './doctors/doctors.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { PatientRegistrationComponent } from './patient/patient-registration/patient-registration.component';
import { ModePipe } from './hospital-info/mode.pipe';
import { SearchPipe } from './hospital-info/search.pipe';
import { APP_CONFIG, IAppConfig } from 'core';
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomInterceptorService } from './customInterceptor/custom.interceptor.service';
import { HoverDirective } from './customDirective/hover.directive';

const app_config: IAppConfig = {
  apiEndPoint: environment.apiEndPoint
};

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
    LoginComponent,
    PatientRegistrationComponent,
    ModePipe,
    SearchPipe,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    DoctorsModule,
    RoutingModule
  ],
  entryComponents: [HeaderComponent], 
  providers: [
    {provide: APP_CONFIG, useValue: app_config},
    {provide: HTTP_INTERCEPTORS, useClass: CustomInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

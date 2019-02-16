import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HospitalInfoComponent } from './hospital-info/hospital-info.component';
import { InsuranceProviderComponent } from './hospital-info/insurance-provider/insurance-provider.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HospitalInfoComponent,
    InsuranceProviderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

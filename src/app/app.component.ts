import { Component, SkipSelf, OnInit, Inject } from '@angular/core';
import { IPatient } from './patient/IPatient';
import { DoctorService } from './doctors/services/doctor.service';
import { ObservableService } from './Observables/observable.service';
import { NavigationStart, Router } from '@angular/router';
import { APP_CONFIG, IAppConfig } from 'core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'HospitalManagementApp';
  role: string = 'Admin';
  patientList: IPatient[] = [
    { name: 'Test', age: 23, number: '1243970', address: 'Pune', symptoms: 'cold' },
    { name: 'Test1', age: 21, number: '1243970', address: 'Pune', symptoms: 'cold' },
    { name: 'Test2', age: 22, number: '1243970', address: 'Pune', symptoms: 'cold' },
    { name: 'Test3', age: 25, number: '1243970', address: 'Pune', symptoms: 'cold' },
    { name: 'Test4', age: 25, number: '1243970', address: 'Pune', symptoms: 'cold' }
  ];

  constructor(@SkipSelf() private docService: DoctorService, 
  private obsService: ObservableService, 
  private router: Router,
  @Inject(APP_CONFIG) private appConfig: IAppConfig ) {
    console.log(appConfig);
   }

  ngOnInit(): void {

    this.router.events.subscribe((eve) => {
      if(eve => eve instanceof NavigationStart) {
        console.log(eve);
      }
    })

    this.obsService.getName().subscribe(
      data => console.log(data)
    );
  }

  addDoctor() {
    this.docService.addDoctor({ name: 'Test2', speciality: 'Surgeon', degree: 'MBBS', contactNo: '123', joinedOn: new Date('11-Oct-1995'), salary: 10000 });
  }

  addName() {
    // console.log(this.obsService.setName('Test User').
    // subscribe(data => console.log(data)));
    this.obsService.setName('Test User');
  }
}

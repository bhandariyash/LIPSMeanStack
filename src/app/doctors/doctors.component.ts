import { Component, OnInit, DoCheck, ViewChild, AfterViewInit, ViewChildren, QueryList, Self } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { IDoctors } from './services/doctors';
import { DoctorService } from './services/doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
  providers: [DoctorService]
})
export class DoctorsComponent implements OnInit, DoCheck, AfterViewInit {

  @ViewChild(HeaderComponent) headerComponent: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildren: QueryList<HeaderComponent>;
  selectedDoctor: IDoctors;
  doctorList: Array<IDoctors> = [];
  constructor(@Self() private docService: DoctorService) { }

  ngOnInit() {
    this.doctorList = this.docService.getDoctorList();
  }

  addDoctor() {
    // this.doctorList = [...this.doctorList,
    // { name: 'Test1', speciality: 'Surgeon', degree: 'MBBS', contactNo: '123', joinedOn: new Date('11-Oct-1995'), salary: 10000 }
    // ];

    //this.doctorList.push({ name: 'Test1', speciality: 'Surgeon', degree: 'MBBS', contactNo: '123', joinedOn: new Date('11-Oct-1995'), salary: 10000 });
    this.doctorList = this.docService.addDoctor({ name: 'Test2', speciality: 'Surgeon', degree: 'MBBS', contactNo: '123', joinedOn: new Date('11-Oct-1995'), salary: 10000 });
  }

  ngDoCheck(): void {
    console.log('Do check is called');
  }

  receiveDoctor(doctor: IDoctors) {
    this.selectedDoctor = doctor;
  }

  ngAfterViewInit(): void {
    console.log(this.headerChildren);
    this.headerComponent.header = 'Selected Doctor';
    //setTimeout(() => this.headerComponent.header = 'Selected Doctor', 0); //to avoid dev mode error
    this.headerChildren.forEach((headerComp, i) => {
      console.log(i);
      setTimeout(() => headerComp.header = "Selected Doctor from children", 0);
    });
    //this.headerComponent.header = 'Selected Doctor'; //does not override ViewChildren effect
    // setTimeout(() => this.headerComponent.header = 'Selected Doctor', 0); //overrides ViewChildren effect
  }

}

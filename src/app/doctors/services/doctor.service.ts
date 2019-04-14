import { Injectable } from '@angular/core';
import { IDoctors } from './doctors';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  docList: Array<IDoctors>;
  constructor() { }

  getDoctorList(): Array<IDoctors> {
    return this.docList = [
      { name: 'Ram', speciality: 'Surgeon', degree: 'MBBS', contactNo: '871234000', joinedOn: new Date('11-Oct-1994'), salary: 50000 },
      { name: 'Shyaam', speciality: 'Heart', degree: 'MD', contactNo: '871232000', joinedOn: new Date('11-Oct-2000'), salary: 60000 },
      { name: 'Rohan', speciality: 'ENT', degree: 'MBBS', contactNo: '871231230', joinedOn: new Date('11-Oct-2002'), salary: 70000 },
      { name: 'Mohan', speciality: 'Dietician', degree: 'MD', contactNo: '871234789', joinedOn: new Date('11-Oct-2006'), salary: 80000 },
      { name: 'Sohan', speciality: 'Surgeon', degree: 'MD', contactNo: '871235670', joinedOn: new Date('11-Oct-1990'), salary: 100000 },
      { name: 'Test', speciality: 'Surgeon', degree: 'MBBS', contactNo: '871664000', joinedOn: new Date('11-Oct-1995'), salary: 10000 },
    ];
  }

  addDoctor(doctor: IDoctors) {
    return this.docList = [...this.docList, doctor];
  }
}


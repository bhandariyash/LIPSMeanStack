import { Component, OnInit } from '@angular/core';
import { IHospitalInfo } from './hospital';

@Component({
  selector: 'app-hospital-info',
  templateUrl: './hospital-info.component.html',
  styleUrls: ['./hospital-info.component.css']
})
export class HospitalInfoComponent implements OnInit {

  hospitalInfo: IHospitalInfo = {
    name: 'Test',
    address: 'Pune',
    specialization: 'Orthopaedic'
  }
  constructor() { }

  ngOnInit() {
  }

}

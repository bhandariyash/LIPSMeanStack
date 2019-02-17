import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDoctors } from '../doctors';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {

  @Input() doctorsList: Array<IDoctors> = [];
  @Output() selectedDoctor = new EventEmitter<IDoctors>();
  constructor() { }

  ngOnInit() {
  }

  sendSelectedDoctor(doctor: IDoctors): void {
    console.log(doctor);
    this.selectedDoctor.emit(doctor);
  }
}

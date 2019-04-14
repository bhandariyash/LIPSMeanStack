import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { IDoctors } from './../services/doctors';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoctorsListComponent implements OnInit, OnChanges {

  @Input() doctorsList: Array<IDoctors> = [];
  @Output() selectedDoctor = new EventEmitter<IDoctors>();
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    for(let prop in changes) {
      console.log(prop);
      if (prop === 'title') {

      }
    }
    console.log(changes);
  }
  sendSelectedDoctor(doctor: IDoctors): void {
    console.log(doctor);
    this.selectedDoctor.emit(doctor);
  }
}

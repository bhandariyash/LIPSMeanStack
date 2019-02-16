import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  name: string = 'Yash';
  city: string = '';
  isHidden: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  getName() : string {
    return this.name;
  }

  changeName(name: any) {
    //console.log(name.target.value);
    this.name = name.target.value;
    this.city = "Pune";
  }

  toggleInputs() {
    this.isHidden = !this.isHidden;
  }
}

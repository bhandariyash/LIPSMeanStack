import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  empList: Array<string> = ['Test', 'Test1', 'Test2'];
  constructor() { }

  ngOnInit() {
  }

}

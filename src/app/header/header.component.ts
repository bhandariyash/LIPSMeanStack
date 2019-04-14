import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: '<app-content>{{header}}</app-content>',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header: string = 'Default Header';
  constructor() { }

  ngOnInit() {
  }


}

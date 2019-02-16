import { Component, OnInit } from '@angular/core';
import { IInsuranceProviders } from './insurance-provider';

@Component({
  selector: 'app-insurance-provider',
  templateUrl: './insurance-provider.component.html',
  styleUrls: ['./insurance-provider.component.css']
})
export class InsuranceProviderComponent implements OnInit {

  providers: Array<IInsuranceProviders> = [
    {name: 'BOI', cashLess: false, dailyLimit: 5000},
    {name: 'Star Health', cashLess: true, dailyLimit: 10000},
    {name: 'HDFC', cashLess: true, dailyLimit: 7000},
  ];
  constructor() { }

  ngOnInit() {
  }

}

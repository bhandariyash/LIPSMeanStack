import { Component, OnInit } from '@angular/core';
import { IInsuranceProviders } from './insurance-provider';

@Component({
  selector: 'app-insurance-provider',
  templateUrl: './insurance-provider.component.html',
  styleUrls: ['./insurance-provider.component.css']
})
export class InsuranceProviderComponent implements OnInit {

  providers: Array<IInsuranceProviders> = [
    {name: 'BOI', cashLess: false, dailyLimit: 5000, coverage: 0.9, activeFrom: new Date('10-Jan-1990')},
    {name: 'Star Health', cashLess: true, dailyLimit: 10000, coverage: 0.8, activeFrom: new Date('10-Jan-1990')},
    {name: 'HDFC', cashLess: true, dailyLimit: 7000, coverage: 0.7, activeFrom: new Date('10-Jan-1990')},
    {name: 'UBI', cashLess: true, dailyLimit: 7000, coverage: 0.7, activeFrom: new Date('10-Jan-1990')},
    {name: 'Kotak', cashLess: true, dailyLimit: 7000, coverage: 0.8, activeFrom: new Date('10-Jan-1990')},
  ];

  providerName = '';
  constructor() { }

  ngOnInit() {
  }

  trackByFn(index, item) {
    return index;
  }

}

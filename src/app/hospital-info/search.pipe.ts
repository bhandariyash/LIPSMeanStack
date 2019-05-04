import { Pipe, PipeTransform } from '@angular/core';
import { IInsuranceProviders } from './insurance-provider/insurance-provider';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(providers: IInsuranceProviders[], providerName: string): any {
    if (providerName !== '') {
      const data = providers.filter((provider) => provider.name.toLowerCase().includes(providerName.toLowerCase()));
      return data;
    } else {
      return providers;
    }
  }

}

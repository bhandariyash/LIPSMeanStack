import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mode'
})
export class ModePipe implements PipeTransform {

  transform(isCashless: boolean, args?: any): any {
    return isCashless ? 'Yes' : 'No';
  }

}

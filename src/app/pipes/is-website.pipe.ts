import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'isNullValue'
})
export class IsNullValuePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if (value === '' || value === null || value === undefined) {
      return 'N/A'
    }
    return value;
  }

}

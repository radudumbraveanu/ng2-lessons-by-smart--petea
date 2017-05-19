import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypow'
})
export class MypowPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Math.pow(value, args);
  }

}

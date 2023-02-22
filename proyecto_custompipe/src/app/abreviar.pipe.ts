import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abreviar'
})
export class AbreviarPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length>3) {
      let abr = value.substr(0,3)+"...";
      return abr;
    } else {
      let abr = value.substr(0,3);
      return abr;
    }
  }

}

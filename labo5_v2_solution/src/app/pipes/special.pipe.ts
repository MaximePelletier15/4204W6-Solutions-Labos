import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'special'
})
export class SpecialPipe implements PipeTransform {

  transform(x: any, args?: any): any {
    
    x = x.toLowerCase();
    for(let i = 0; i < x.length; i++){
      if(i % 2 == 1){
        x = x.substring(0, i) + x.charAt(i).toUpperCase() + x.substring(i + 1);
      }
    }
    return x;

  }

}

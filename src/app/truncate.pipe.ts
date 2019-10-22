import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, ...args: any[]) {
    if(value.length <= args[0]){
      return value;
    }
    let length = args[0];
    for (let i = length; value.charAt(i) != " "; i++){
      length++;
    }
    return value.substr(0, length) + '...';
  }
}

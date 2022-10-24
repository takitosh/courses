import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})

export class DurationPipe implements PipeTransform {
  transform(value: any): string { // Error for number type ???
    if (value > 0 && value < 60) {
      return value + ' minutes';
    } else if (value > 60 && value < 120) {
      return `${Math.trunc(value/60)}:${value%60} hour`;
    } else {
      return `${Math.trunc(value/60)}:${value%60 < 10 ? '0' + value%60 : value%60} hours`;
    }
  }
}

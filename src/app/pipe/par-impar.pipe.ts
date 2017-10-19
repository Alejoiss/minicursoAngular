import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parImpar'
})
export class ParImparPipe implements PipeTransform {

  transform(value: any): string {
    if (value % 2 === 0) {
      return 'par';
    } else {
      return 'ímpar';
    }
  }
}

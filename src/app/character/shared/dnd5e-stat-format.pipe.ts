import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dnd5eStatFormat'
})
export class Dnd5eStatFormatPipe implements PipeTransform {
  transform(value: number, showBonus: boolean): string {
    if (showBonus) {
      if (value <= 1) {
        return '-5';
      } else if (value >= 30) {
        return '+10';
      } else {
        const result = Math.floor(value / 2) - 5;
        return `${result > -1 ? '+' : ''}${result}`;
      }
    } else {
      return ('0' + value).slice(-2);
    }
  }
}

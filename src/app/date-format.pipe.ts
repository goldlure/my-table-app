import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string | Date): string {
    if (value instanceof Date) {
      return value.toLocaleDateString(); // Format date as "MM/DD/YYYY"
    } else {
      const date = new Date(value);
      return date.toLocaleDateString(); // Format date as "MM/DD/YYYY"
    }
  }
}

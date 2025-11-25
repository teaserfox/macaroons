import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    // ожидаем формат "375293689868"
    const match = value.match(/^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/);
    if (!match) return value;

    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
  }

}

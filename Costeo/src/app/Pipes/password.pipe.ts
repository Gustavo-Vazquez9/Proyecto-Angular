import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, active: boolean): unknown {
    return (!active) ? '*'.repeat(value.length) : value;
  }

}

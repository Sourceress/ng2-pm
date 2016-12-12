import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toHours' })
export class DurationPipe implements PipeTransform {
  transform(duration: number): string {
    let hourPart = Math.floor(duration / 60);
    let remainingMinutes = duration % 60;

    return ('00' + hourPart).slice(-2) + ':' + ('00' + remainingMinutes).slice(-2);
  }
}

import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[pmWorktime]',
  inputs: ['pmWorktime']
})
export class WorktimeDirective {
  private el: ElementRef;
  constructor(el: ElementRef) {
    this.el = el;
  }

  set pmWorktime(amount: number) {
    if (amount < 420) {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    } else if (amount >= 420 && amount < 540) {
      this.el.nativeElement.style.backgroundColor = 'green';
    } else {
      this.el.nativeElement.style.backgroundColor = 'red';
    }
  }
}

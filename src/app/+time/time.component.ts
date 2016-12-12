import { Component, OnInit } from '@angular/core';

import { TimeService } from './time.service';
import { Time } from './time.model';

@Component({
  selector: 'pm-time',
  templateUrl: './time.component.html'
})
export class TimeComponent implements OnInit {
  public times: Time[];

  constructor(private service: TimeService) { }

  ngOnInit() {
    this.service.getAllTimes().subscribe(t => this.times = t);
  }
}

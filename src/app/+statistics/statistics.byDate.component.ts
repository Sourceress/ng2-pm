import { Component, Input } from '@angular/core';

import { TimeByDate } from './statistics.model';

@Component({
  selector: 'pm-timebydate',
  templateUrl: './statistics.byDate.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsByDateComponent {
  @Input() timesByDate: TimeByDate[];
  @Input() totalTime: number;
}

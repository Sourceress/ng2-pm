import { Component, Input } from '@angular/core';

import { TimeByProject } from './statistics.model';

@Component({
  selector: 'pm-timebyproject',
  templateUrl: './statistics.byProject.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsByProjectComponent {
  @Input() timesByProject: TimeByProject[];
  @Input() totalTime: number;
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { StatisticsService } from './statistics.service';
import { TimeByProject, TimeByDate } from './statistics.model';

@Component({
  selector: 'pm-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  public timesByProject: TimeByProject[] = [];
  public timesByDate: TimeByDate[] = [];
  public totalTime: number = 0;

  constructor(private service: StatisticsService) { }

  ngOnInit() {
    this.totalTime = 0;
    this.service.getAllByProject().subscribe(t => {
      this.timesByProject.push(t);
      this.totalTime += t.amount;
    });

    this.service.getAllByDay().subscribe(t => this.timesByDate.push(t));
  }
}

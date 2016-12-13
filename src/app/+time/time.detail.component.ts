import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { TimeService } from './time.service';
import { Time } from './time.model';
import { Project, CostType } from './project.model';


@Component({
  selector: 'pm-timedetail',
  templateUrl: './time.detail.component.html'
})
export class TimeDetailComponent implements OnInit {
  public projects: Project[];
  public costTypes: CostType[];

  public time: Time = new Time();
  public date: Date;
  public project: string;
  public costType: string;
  public amount: number;
  public comment: string;

  constructor(private service: TimeService, private route: ActivatedRoute, private location: Location) { }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.service.getTime(+params['id']))
            .subscribe(t => {
                this.time = t;
                this.time.date = this.time.date.substring(0,10);
            });
        this.service.getAllProjects()
            .subscribe(p => {
                this.projects = p;
                this.onSelect(p[0].name);
            });
    };

  onSelect(name: string) {
    this.costTypes = this.projects.find(p => p.name === name).costTypes;
  }

  save() {
    this.service.updateTime(this.time).subscribe(() => this.location.back());
  }

}

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { TimeService } from './time.service';
import { Project, CostType } from './project.model';

@Component({
  selector: 'pm-newtime',
  templateUrl: './newtime.component.html'
})
export class NewTimeComponent implements OnInit {
  public projects: Project[];
  public costTypes: CostType[];

  public date: Date;
  public project: string;
  public costType: string;
  public amount: number;
  public comment: string;

  constructor(private service: TimeService, private location: Location) { }

  ngOnInit() {
    this.service.getAllProjects().subscribe(p => {
      this.projects = p;
      this.onSelect(p[0].name);

      this.date = new Date();
      this.project = this.projects[0].name;
      this.costType = this.costTypes[0].name;
    });
  }

  onSelect(name: string) {
    this.costTypes = this.projects.find(p => p.name === name).costTypes;
  }

  save() {
    this.service.saveTime(
      this.date,
      this.project,
      this.costType,
      this.amount,
      this.comment).subscribe(() => this.location.back());
  }
}

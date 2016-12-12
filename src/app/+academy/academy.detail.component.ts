import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { AcademyService } from './academy.service';
import { Course } from './course.model';

@Component({
  selector: 'pm-academy-detail',
  templateUrl: './academy.detail.component.html',
  styleUrls: ['./academy.component.css']
})
export class AcademyDetailComponent implements OnInit {
  public course: Course;

  constructor(
    private service: AcademyService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.service.getCourse(+params['id']))
    .subscribe(c => this.course = c);
  }

  goBack() {
    this.location.back();
  }
}

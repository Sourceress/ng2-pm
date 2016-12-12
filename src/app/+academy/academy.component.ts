import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AcademyService } from './academy.service';
import { Course } from './course.model';

@Component({
  selector: 'pm-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.css']
})
export class AcademyComponent implements OnInit {
  public courses: Course[];

  constructor(private service: AcademyService) { }

  ngOnInit() {
    this.service.getAll().subscribe(c => this.courses = c);
  }
}

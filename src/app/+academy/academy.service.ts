import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Course } from './course.model';

@Injectable()
export class AcademyService {
  constructor(private http: Http, @Inject('baseUrl') private baseUrl: string) { }

  getAll(): Observable<Course[]> {
    let url = this.baseUrl + 'api/courses';

    return this.http.get(url)
      .map(response => response.json())
      .catch(this.handleError);
  }

  getCourse(id: number): Observable<Course> {
    let url = this.baseUrl + 'api/courses/' + id;

    return this.http.get(url)
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.warn(error);
    return Observable.throw(error.json().message || 'Server error');
  }
}

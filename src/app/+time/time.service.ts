import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Time } from './time.model';
import { Project } from './project.model';

@Injectable()
export class TimeService {

  constructor(private http: Http, @Inject('baseUrl') private baseUrl: string) { }

  getAllTimes(): Observable<Time[]> {
    let url = this.baseUrl + 'api/times';

    return this.http.get(url)
      .map(response => response.json())
      .catch(this.handleError);
  }

  getAllProjects(): Observable<Project[]> {
    let url = this.baseUrl + 'api/projects';

    return this.http.get(url)
      .map(response => response.json())
      .catch(this.handleError);
  }

  saveTime(
    date: Date,
    project: string,
    costType: string,
    amount: number,
    comment: string
  ) {
    let url = this.baseUrl + 'api/times';
    let body = JSON.stringify({ date, amount, project, costType, comment });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(url, body, options)
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.warn(error);
    return Observable.throw(error.json().message || 'Server error');
  }
}

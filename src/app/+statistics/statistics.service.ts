import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { TimeByProject, TimeByDate, Time } from './statistics.model';

@Injectable()
export class StatisticsService {

  constructor(private http: Http, @Inject('baseUrl') private baseUrl: string) { }

  getAllByProject(): Observable<TimeByProject> {
    return this.getAllTimes()
      .switchMap(timeArray => Observable.from(timeArray))
      .groupBy(time => time.project)
      .mergeMap(group => group.reduce((acc, curr) => {
        acc.amount += curr.amount;
        return acc;
      }, { project: group.key, amount: 0 }));
  }

  getAllByDay(): Observable<TimeByDate> {
    return this.getAllTimes()
      .switchMap(timeArray => Observable.from(timeArray))
      .groupBy(time => time.date)
      .mergeMap(group => group.reduce((acc, curr) => {
        acc.amount += curr.amount;
        return acc;
      }, { day: group.key, amount: 0 }));
  }

  private getAllTimes(): Observable<Time[]> {
    let url = this.baseUrl + 'api/times';

    return this.http.get(url)
      .map(response => response.json());
  }

  private handleError(error: any) {
    console.warn(error);
    return Observable.throw(error.json().message || 'Server error');
  }
}

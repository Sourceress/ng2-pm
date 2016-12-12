import { APP_BASE_HREF } from '@angular/common';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { AppRoutingModule } from '../app.routing';
import { AcademyModule } from './academy.module';
import { AcademyComponent } from './academy.component';
import { AcademyService } from './academy.service';
import { Course } from './course.model';

class MockAcademyService {
  getAll(): Observable<Course[]> {
    return Observable.of<Course[]>([
      { id: 1, title: '', abstract: '', category: '', content: '', target: '', teacher: '', date: '' },
      { id: 2, title: '', abstract: '', category: '', content: '', target: '', teacher: '', date: '' }
    ]);
  }

  getCourse(id: number): Observable<Course> {
    return Observable.of<Course>(
      { id: 1, title: '', abstract: '', category: '', content: '', target: '', teacher: '', date: '' }
    );
  }
}

describe('AcademyCompoonent', () => {
  beforeEach(() => {
    this.service = new MockAcademyService();

    TestBed.configureTestingModule({
      imports: [AppRoutingModule, AcademyModule],
      providers: [
        { provide: AcademyService, useValue: this.service },
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    });

    this.fixture = TestBed.createComponent(AcademyComponent);
  });

  it('should print out courses', async(() => {
    this.fixture.whenStable().then(() => {
      let element = this.fixture.nativeElement;
      this.fixture.detectChanges();

      expect(element.querySelectorAll('.jumbotron').length).toBe(2);
    });
  }));
});

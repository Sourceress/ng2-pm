import { inject, TestBed, fakeAsync } from '@angular/core/testing';
import { BaseRequestOptions, Response, ResponseOptions, RequestMethod, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { AcademyService } from './academy.service';
import { Course } from './course.model';

const mockHttpProvider = {
  provide: Http,
  useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
    return new Http(backend, defaultOptions);
  },
  deps: [MockBackend, BaseRequestOptions]
};

const testEnvironmentProvider = { provide: 'baseUrl', useValue: 'http://localhost:3001/' };

describe('AcademyService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AcademyService,
        MockBackend,
        BaseRequestOptions,
        mockHttpProvider,
        testEnvironmentProvider
      ]
    });
  });

  it('should use an HTTP call to obtain courses',
    inject([AcademyService, MockBackend], fakeAsync((service: AcademyService, backend: MockBackend) => {
      backend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.method).toBe(RequestMethod.Get);
        expect(connection.request.url).toBe('http://localhost:3001/api/courses');
      });

      service.getAll();
    })));

  it('should get all courses from API backend',
    inject([AcademyService, MockBackend], fakeAsync((service: AcademyService, backend: MockBackend) => {
      backend.connections.subscribe((connection: MockConnection) => {
        let data = [
          { id: 1, title: 'Title 1', abstract: 'Abstract 1', category: 'Category 1' },
          { id: 2, title: 'Title 2', abstract: 'Abstract 2', category: 'Category 2' }
        ];

        let response = new ResponseOptions({ body: JSON.stringify(data) });
        connection.mockRespond(new Response(response));
      });

      service.getAll().subscribe(courses => {
        expect(courses.length).toBe(2);
      });
    })));
});

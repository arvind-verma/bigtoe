import { TestBed } from '@angular/core/testing';

import { App.Response.InterceptorService } from './app.response.interceptor.service';

describe('App.Response.InterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: App.Response.InterceptorService = TestBed.get(App.Response.InterceptorService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { InterceptorHttpCallsService } from './interceptor-http-calls.service';

describe('InterceptorHttpCallsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterceptorHttpCallsService = TestBed.get(InterceptorHttpCallsService);
    expect(service).toBeTruthy();
  });
});

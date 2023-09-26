import { TestBed } from '@angular/core/testing';

import { CookieServices } from './cookie.service';

describe('CookieServiceService', () => {
  let service: CookieServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

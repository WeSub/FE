import { TestBed, inject } from '@angular/core/testing';

import { SeniorService } from './senior.service';

describe('SeniorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeniorService]
    });
  });

  it('should be created', inject([SeniorService], (service: SeniorService) => {
    expect(service).toBeTruthy();
  }));
});

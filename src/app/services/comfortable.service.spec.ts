import { TestBed, inject } from '@angular/core/testing';

import { ComfortableService } from './comfortable.service';

describe('ComfortableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComfortableService]
    });
  });

  it('should be created', inject([ComfortableService], (service: ComfortableService) => {
    expect(service).toBeTruthy();
  }));
});

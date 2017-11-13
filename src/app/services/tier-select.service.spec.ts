import { TestBed, inject } from '@angular/core/testing';

import { TierSelectService } from './tier-select.service';

describe('TierSelectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TierSelectService]
    });
  });

  it('should be created', inject([TierSelectService], (service: TierSelectService) => {
    expect(service).toBeTruthy();
  }));
});

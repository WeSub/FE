import { TestBed, inject } from '@angular/core/testing';

import { SessionUserService } from './session-user.service';

describe('SessionUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionUserService]
    });
  });

  it('should be created', inject([SessionUserService], (service: SessionUserService) => {
    expect(service).toBeTruthy();
  }));
});

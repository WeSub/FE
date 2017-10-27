import { TestBed, inject } from '@angular/core/testing';

import { UserPersonaService } from './user-persona.service';

describe('UserPersonaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserPersonaService]
    });
  });

  it('should be created', inject([UserPersonaService], (service: UserPersonaService) => {
    expect(service).toBeTruthy();
  }));
});

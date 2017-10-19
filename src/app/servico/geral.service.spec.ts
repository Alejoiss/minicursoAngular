import { TestBed, inject } from '@angular/core/testing';

import { GeralService } from './geral.service';

describe('GeralService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeralService]
    });
  });

  it('should be created', inject([GeralService], (service: GeralService) => {
    expect(service).toBeTruthy();
  }));
});

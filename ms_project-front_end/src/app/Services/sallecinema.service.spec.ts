import { TestBed } from '@angular/core/testing';

import { SallecinemaService } from './sallecinema.service';

describe('SallecinemaService', () => {
  let service: SallecinemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SallecinemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

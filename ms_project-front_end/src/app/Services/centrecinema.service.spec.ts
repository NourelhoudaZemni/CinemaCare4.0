import { TestBed } from '@angular/core/testing';

import { CentrecinemaService } from './centrecinema.service';

describe('CentrecinemaService', () => {
  let service: CentrecinemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentrecinemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

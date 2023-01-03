import { TestBed } from '@angular/core/testing';

import { LpgService } from './lpg.service';

describe('LpgService', () => {
  let service: LpgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LpgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

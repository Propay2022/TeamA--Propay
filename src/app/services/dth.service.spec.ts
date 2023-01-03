import { TestBed } from '@angular/core/testing';

import { DthService } from './dth.service';

describe('DthService', () => {
  let service: DthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

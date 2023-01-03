import { TestBed } from '@angular/core/testing';

import { BroadbandService } from './broadband.service';

describe('BroadbandService', () => {
  let service: BroadbandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BroadbandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { COVIDService } from './covid.service';

describe('COVIDService', () => {
  let service: COVIDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(COVIDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ClinicalService } from './clinical.service';

describe('ClinicalService', () => {
  let service: ClinicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClinicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

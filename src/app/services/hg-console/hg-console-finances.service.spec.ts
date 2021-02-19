import { TestBed } from '@angular/core/testing';

import { HgConsoleFinancesService } from './hg-console-finances.service';

describe('HgConsoleFinancesService', () => {
  let service: HgConsoleFinancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HgConsoleFinancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

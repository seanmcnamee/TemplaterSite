import { TestBed } from '@angular/core/testing';

import { SpreadsheetIOService } from './spreadsheet-io.service';

describe('SpreadsheetReaderService', () => {
  let service: SpreadsheetIOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpreadsheetIOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

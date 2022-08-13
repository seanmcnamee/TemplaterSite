import { TestBed } from '@angular/core/testing';

import { SpreadsheetReaderService } from './spreadsheet-reader.service';

describe('SpreadsheetReaderService', () => {
  let service: SpreadsheetReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpreadsheetReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

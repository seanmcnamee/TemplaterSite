import { TestBed } from '@angular/core/testing';

import { ReplacementsExtractorService } from './replacements-extractor.service';

describe('ReplacementsExtractorService', () => {
  let service: ReplacementsExtractorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReplacementsExtractorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

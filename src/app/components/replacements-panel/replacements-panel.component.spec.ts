import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IErrorAlertsService } from 'src/app/services/error-alerts/arror-alerts.service.interface';
import { ErrorAlertsService } from 'src/app/services/error-alerts/error-alerts.service';
import { ReplacementsExtractorService } from 'src/app/services/replacements-extractor/replacements-extractor.service';
import { IReplacementsExtractorService } from 'src/app/services/replacements-extractor/replacements-extractor.service.interface';
import { SpreadsheetIOService } from 'src/app/services/spreadsheet-reader/spreadsheet-io.service';
import { ISpreadsheetIOService } from 'src/app/services/spreadsheet-reader/spreadsheet-io.service.interface';

import { ReplacementsPanelComponent } from './replacements-panel.component';

describe('ReplacementsPanelComponent', () => {
  let component: ReplacementsPanelComponent;
  let fixture: ComponentFixture<ReplacementsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplacementsPanelComponent ],
      providers: [
        { provide: IErrorAlertsService, useClass: ErrorAlertsService },
        { provide: IReplacementsExtractorService, useClass: ReplacementsExtractorService },
        { provide: ISpreadsheetIOService, useClass: SpreadsheetIOService }
      ]
    })
    .compileComponents();

    await TestBed.configureTestingModule({
      declarations: [  ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplacementsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

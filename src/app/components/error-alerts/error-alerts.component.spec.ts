import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IErrorAlertsService } from 'src/app/services/error-alerts/arror-alerts.service.interface';
import { ErrorAlertsService } from 'src/app/services/error-alerts/error-alerts.service';

import { ErrorAlertsComponent } from './error-alerts.component';

describe('ErrorAlertsComponent', () => {
  let component: ErrorAlertsComponent;
  let fixture: ComponentFixture<ErrorAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorAlertsComponent ],
      providers: [{ provide: IErrorAlertsService, useClass: ErrorAlertsService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

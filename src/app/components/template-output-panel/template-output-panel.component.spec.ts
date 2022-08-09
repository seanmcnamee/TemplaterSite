import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormatterService } from 'src/app/services/formatter/formatter.service';
import { IFormatterService } from 'src/app/services/formatter/formatter.service.interface';

import { TemplateOutputPanelComponent } from './template-output-panel.component';

describe('TemplateOutputPanelComponent', () => {
  let component: TemplateOutputPanelComponent;
  let fixture: ComponentFixture<TemplateOutputPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateOutputPanelComponent ],
      providers: [{ provide: IFormatterService, useClass: FormatterService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateOutputPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

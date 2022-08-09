import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateOutputPanelComponent } from './template-output-panel.component';

describe('TemplateOutputPanelComponent', () => {
  let component: TemplateOutputPanelComponent;
  let fixture: ComponentFixture<TemplateOutputPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateOutputPanelComponent ]
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

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplacementsPanelComponent } from './replacements-panel.component';

describe('ReplacementsPanelComponent', () => {
  let component: ReplacementsPanelComponent;
  let fixture: ComponentFixture<ReplacementsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplacementsPanelComponent ]
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

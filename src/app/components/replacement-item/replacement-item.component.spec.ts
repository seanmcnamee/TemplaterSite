import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplacementItemComponent } from './replacement-item.component';

describe('ReplacementItemComponent', () => {
  let component: ReplacementItemComponent;
  let fixture: ComponentFixture<ReplacementItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplacementItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplacementItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

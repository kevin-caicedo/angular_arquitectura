import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorInfoComponent } from './competitor-info.component';

describe('CompetitorInfoComponent', () => {
  let component: CompetitorInfoComponent;
  let fixture: ComponentFixture<CompetitorInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitorInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

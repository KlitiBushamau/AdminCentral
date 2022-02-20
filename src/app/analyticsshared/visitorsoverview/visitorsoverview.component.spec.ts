import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsoverviewComponent } from './visitorsoverview.component';

describe('VisitorsoverviewComponent', () => {
  let component: VisitorsoverviewComponent;
  let fixture: ComponentFixture<VisitorsoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorsoverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorsoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

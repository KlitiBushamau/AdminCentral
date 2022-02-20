import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsbreadcrumbComponent } from './analyticsbreadcrumb.component';

describe('AnalyticsbreadcrumbComponent', () => {
  let component: AnalyticsbreadcrumbComponent;
  let fixture: ComponentFixture<AnalyticsbreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticsbreadcrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsbreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

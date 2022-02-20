import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancebreadcrumbComponent } from './financebreadcrumb.component';

describe('BreadcrumbComponent', () => {
  let component: FinancebreadcrumbComponent;
  let fixture: ComponentFixture<FinancebreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancebreadcrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancebreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

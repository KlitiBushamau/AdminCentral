import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageviewsComponent } from './pageviews.component';

describe('PageviewsComponent', () => {
  let component: PageviewsComponent;
  let fixture: ComponentFixture<PageviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

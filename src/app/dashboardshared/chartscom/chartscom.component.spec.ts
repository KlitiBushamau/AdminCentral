import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartscomComponent } from './chartscom.component';

describe('ChartscomComponent', () => {
  let component: ChartscomComponent;
  let fixture: ComponentFixture<ChartscomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartscomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartscomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

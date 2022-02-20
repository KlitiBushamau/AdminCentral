import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBreadcrumbComponent } from './profilebreadcrumb.component';

describe('ProfileBreadcrumbComponent', () => {
  let component: ProfileBreadcrumbComponent;
  let fixture: ComponentFixture<ProfileBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileBreadcrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

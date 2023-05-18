import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDealerPublicComponent } from './profile-dealer-public.component';

describe('ProfileDealerPublicComponent', () => {
  let component: ProfileDealerPublicComponent;
  let fixture: ComponentFixture<ProfileDealerPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDealerPublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDealerPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

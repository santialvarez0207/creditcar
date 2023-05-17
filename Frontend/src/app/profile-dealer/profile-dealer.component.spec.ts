import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDealerComponent } from './profile-dealer.component';

describe('ProfileDealerComponent', () => {
  let component: ProfileDealerComponent;
  let fixture: ComponentFixture<ProfileDealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDealerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

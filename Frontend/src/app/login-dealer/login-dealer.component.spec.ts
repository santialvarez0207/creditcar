import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDealerComponent } from './login-dealer.component';

describe('LoginDealerComponent', () => {
  let component: LoginDealerComponent;
  let fixture: ComponentFixture<LoginDealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDealerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

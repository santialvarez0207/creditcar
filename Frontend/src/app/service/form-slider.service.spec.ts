import { TestBed } from '@angular/core/testing';

import { FormSliderService } from './form-slider.service';

describe('FormSliderService', () => {
  let service: FormSliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormSliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DateFoodService } from './date-food.service';

describe('DateFoodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateFoodService = TestBed.get(DateFoodService);
    expect(service).toBeTruthy();
  });
});

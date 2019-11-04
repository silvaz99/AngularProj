import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFoodComponent } from './date-food.component';

describe('DateFoodComponent', () => {
  let component: DateFoodComponent;
  let fixture: ComponentFixture<DateFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

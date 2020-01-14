import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDetailsDirectionsComponent } from './booking-details-directions.component';

describe('BookingDetailsDirectionsComponent', () => {
  let component: BookingDetailsDirectionsComponent;
  let fixture: ComponentFixture<BookingDetailsDirectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingDetailsDirectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingDetailsDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

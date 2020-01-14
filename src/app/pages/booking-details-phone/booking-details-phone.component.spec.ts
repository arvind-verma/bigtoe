import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDetailsPhoneComponent } from './booking-details-phone.component';

describe('BookingDetailsPhoneComponent', () => {
  let component: BookingDetailsPhoneComponent;
  let fixture: ComponentFixture<BookingDetailsPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingDetailsPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingDetailsPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

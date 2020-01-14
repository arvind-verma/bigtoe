import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDetailsNoteComponent } from './booking-details-note.component';

describe('BookingDetailsNoteComponent', () => {
  let component: BookingDetailsNoteComponent;
  let fixture: ComponentFixture<BookingDetailsNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingDetailsNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingDetailsNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

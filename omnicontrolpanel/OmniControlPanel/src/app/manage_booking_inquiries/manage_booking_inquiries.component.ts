import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { BookingInquiryService } from '../../services/customer_relations/booking_inquiries/booking_inquiry.service'

import { BookingInquiry } from '../../services/customer_relations/booking_inquiries/booking_inquiry'

@Component({
  selector: 'app-bookinginquiries',
  templateUrl: './manage_booking_inquiries.component.html',
  styleUrls: ['./manage_booking_inquiries.component.css']
})
export class BookingInquiriesComponent implements OnInit {
  /* promises */
  promiseBookingInquiries: Promise<BookingInquiry[]>

  bookingInquiries: BookingInquiry[];
  
  errorMessage: string;

  constructor(public auth: AuthService,
              private bookingInquiryService: BookingInquiryService) { }

  ngOnInit(): void {
    this.promiseBookingInquiries = this.bookingInquiryService.getBookingInquiriesWithPromise();
    this.promiseBookingInquiries.then(
      bookingInquiries => this.bookingInquiries = bookingInquiries,
      error => this.errorMessage = <any>error
    );
  }

}

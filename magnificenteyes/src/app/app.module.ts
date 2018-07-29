import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { FooterComponent } from './footer/footer.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

import { SubscriberService } from '../services/subscriber/subscriber.service';
import { ContactTimeService } from '../services/booking_inquiry/contact_time.service';
import { InquiryTypeService } from '../services/booking_inquiry/inquiry_type.service';
import { InquiryService } from '../services/booking_inquiry/inquiry.service';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    FooterComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SubscriberService,
    ContactTimeService,
    InquiryTypeService,
    InquiryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

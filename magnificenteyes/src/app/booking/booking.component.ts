import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Inquiry } from './../../services/booking_inquiry/inquiry';
import { InquiryService } from './../../services/booking_inquiry/inquiry.service';
import { InquiryType } from './../../services/booking_inquiry/inquiry_type';
import { InquiryTypeService } from './../../services/booking_inquiry/inquiry_type.service';
import { ContactTime } from './../../services/booking_inquiry/contact_time';
import { ContactTimeService } from './../../services/booking_inquiry/contact_time.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css'],
    providers: [InquiryService, 
               InquiryTypeService,
               ContactTimeService]
})
export class BookingComponent implements OnInit {
    
    promiseInquiryTypes: Promise<InquiryType[]>;
    promiseContactTimes: Promise<ContactTime[]>;
    inquiry: Inquiry = new Inquiry();
    types: any[];
    times: any[];
    testing: Array<any>;
    selectedTimeFrame: string;
    selectedInquiryType: string;

    inquiryTypes: Array<InquiryType>;
    contactTimes: ContactTime[];
    errorMessage: string;

    constructor(private inquiryService: InquiryService,
                private inquiryTypeService: InquiryTypeService,
                private contactTimeService: ContactTimeService) {
    }

    ngOnInit(): void {
        this.inquiry.contact_time_id = 0;
        this.inquiry.inquiry_type_id = 0;
        this.inquiryTypeService.getInquiryTypes()
            .subscribe(
                (inqTypes: any[]) => this.types = inqTypes,
                (error) => console.log(error)
            ); 
        this.contactTimeService.getContactTimes()
            .subscribe(
                (conTimes: any[]) => this.times = conTimes,
                (error) => console.log(error)
            );
    }



    onSubmit() {
        console.log(this.inquiry);
        this.inquiryService.addInquiry(this.inquiry)
            .subscribe(response => {   
            }, error => this.errorMessage = <any>error);
    }
}
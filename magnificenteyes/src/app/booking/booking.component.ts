import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Inquiry } from './../../services/booking_inquiry/inquiry';
import { InquiryService } from './../../services/booking_inquiry/inquiry.service';
import { InquiryType } from './../../services/booking_inquiry/inquiry_type';
import { InquiryTypeService } from './../../services/booking_inquiry/inquiry_type.service';
import { ContactTime } from './../../services/booking_inquiry/contact_time';
import { ContactTimeService } from './../../services/booking_inquiry/contact_time.service';
import { Observable } from 'rxjs/Observable';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css'],
    providers: [InquiryService, 
               InquiryTypeService,
               ContactTimeService,
               FormBuilder]
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

    bookingInquiryForm: FormGroup;

    constructor(private inquiryService: InquiryService,
                private inquiryTypeService: InquiryTypeService,
                private contactTimeService: ContactTimeService) {
    }

    ngOnInit(): void {
        this.bookingInquiryForm = new FormGroup({
            firstname: new FormControl('', Validators.required),
            lastname:  new FormControl('', Validators.required),
            dayphonenumber: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            contacttime: new FormControl('', Validators.required),
            inquirytype: new FormControl('', Validators.required),
            message: new FormControl('', Validators.required)
        });

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
        /* assign the form values to the constructor */
        this.inquiry.first_name = this.bookingInquiryForm.controls['firstname'].value;
        this.inquiry.last_name = this.bookingInquiryForm.controls['lastname'].value;
        this.inquiry.day_phone_number = this.bookingInquiryForm.controls['dayphonenumber'].value;
        this.inquiry.email_address = this.bookingInquiryForm.controls['email'].value;
        this.inquiry.contact_time_id = this.bookingInquiryForm.controls['contacttime'].value;
        this.inquiry.inquiry_type_id = this.bookingInquiryForm.controls['inquirytype'].value;
        this.inquiry.message = this.bookingInquiryForm.controls['message'].value;

        console.log(this.inquiry);

        /* reset the form model */
        this.resetModel();

        /* submit the inquiry to the service */
        this.inquiryService.addInquiry(this.inquiry)
            .subscribe(response => {   
            }, error => this.errorMessage = <any>error);

        /* ToDo: open modal dialog box to return generic message to user for error/success */
    }

    resetModel() {
        this.bookingInquiryForm.setValue({firstname: '', 
                                          lastname: '', 
                                          dayphonenumber: '', 
                                          email: '',
                                          contacttime: '',
                                          inquirytype: '',
                                          message: ''});
        this.bookingInquiryForm.markAsUntouched;
        this.bookingInquiryForm.markAsPristine;
    }
}
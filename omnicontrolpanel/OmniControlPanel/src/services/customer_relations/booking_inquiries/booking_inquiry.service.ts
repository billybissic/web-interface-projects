import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { BookingInquiry } from './booking_inquiry';

@Injectable()
export class BookingInquiryService {
    url = "http://localhost:8080/customer-relations-service/CustomerRelations/";
    constructor(private http:Http) { }
    getBookingInquiriesWithPromise(): Promise<BookingInquiry[]> {
        return this.http.get(this.url + "getAllBookingInquiries").toPromise()
        .then(this.extractData)
        .catch(this.handleErrorPromise);
    }

    /*newBookingInquiryWithPromise(): Promise<BookingInquiry[]> {

    }*/

    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    private handleErrorPromise (error: Response | any ) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
}
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Inquiry } from './inquiry';

@Injectable()
export class InquiryService {

    //serverUrl = "http://localhost:8080/BookingInquiryServices/"
    serverUrl ="http://magnificenteyes.com:8080/bookinginquiry-service/BookingInquiryServices/"
    constructor(private http:Http) { }

    headers = new Headers({
        'Content-Type': 'application/json'
    });

    addInquiry(inquiry: Inquiry): Observable<any>{
        let url = this.serverUrl + "createInquiry"; 
        console.log(inquiry);
        return this.http.post(url, inquiry, {headers: this.headers})
        .map(this.extractData)
        .catch(this.handleErrorObservable);
    }

    extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body || {};
    }

    handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
}
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { InquiryType } from './inquiry_type';
import { Inquiry } from './inquiry';

@Injectable()
export class InquiryTypeService {

    //serverUrl ="http://localhost:8080/BookingInquiryServices/"
    serverUrl ="http://magnificenteyes.com:8080/bookinginquiry-service/BookingInquiryServices/"

    constructor(private http:Http) { }

    headers = new Headers({
        'Content-Type': 'application/json'
    });

    getInquiryTypes() {
        let url = this.serverUrl + "getInquiryTypes";
        return this.http.get(url, {headers: this.headers})
            .map(
                (response: Response) => {
                    const data = response.json();
                    return data;
                }
            );
    }

    getInquiryTypesWithPromise(): Promise<InquiryType[]> {
        return this.http.get(this.serverUrl + "getInquiryTypes").toPromise()
        .then(this.extractData)
        .catch(this.handleErrorPromise);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body;
    }

    private handleErrorPromise (error: Response | any ) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
}
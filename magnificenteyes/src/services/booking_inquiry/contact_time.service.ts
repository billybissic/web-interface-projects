import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ContactTime } from './contact_time';

@Injectable()
export class ContactTimeService {
   
    //serverUrl = "http://localhost:8080/BookingInquiryServices/"
    serverUrl ="http://magnificenteyes.com:8080/bookinginquiry-service/BookingInquiryServices/"
    
    constructor(private http:Http) { }

    headers = new Headers({
        'Content-Type': 'application/json'
    });

    getContactTimes() {
        let url = this.serverUrl + "getContactTimes";
        return this.http.get(url, {headers: this.headers})
            .map(
                (response: Response) => {
                    const data = response.json();
                    console.log(data);
                    return data;
                }
            );
    }

    getContactTimesWithPromise(): Promise<ContactTime[]> {
        return this.http.get(this.serverUrl + "getContactTimes").toPromise()
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
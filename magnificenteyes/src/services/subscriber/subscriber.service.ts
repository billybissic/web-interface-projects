import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { ReturnMessage } from './returnMessage';
import { NewSubscriber } from './newSubscriber';
import { Subscriber } from './subscriber';

@Injectable()
export class SubscriberService {
  
    //serverUrl = "http://localhost:8080/MailingListServices/";
    serverUrl = "http://magnificenteyes.com:8080/mailinglist-service/MailingListServices/"
    constructor(private http:Http) { }

    headers = new Headers({
        'Content-Type': 'application/json'
    });

    addSubscriber(subscriber: Subscriber): Observable<any>{
        let url = this.serverUrl + "subscribe"
        return this.http.post(url, subscriber, {headers: this.headers})
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
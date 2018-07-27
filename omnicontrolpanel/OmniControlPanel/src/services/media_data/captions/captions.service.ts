import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Caption } from './caption';

@Injectable()
export class CaptionsService {
    url = "http://localhost:8080/mediadata-service/MediaDataServices/";
    constructor(private http:Http) { }
    getCaptionsWithPromise(): Promise<Caption[]> {
        return this.http.get(this.url + "getAllCaptions").toPromise()
        .then(this.extractData)
        .catch(this.handleErrorPromise);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    private handleErrorPromise (error: Response | any ) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
}
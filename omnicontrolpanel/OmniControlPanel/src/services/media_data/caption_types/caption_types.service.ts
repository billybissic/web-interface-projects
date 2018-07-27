import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { CaptionType } from './caption_type';

@Injectable()
export class CaptionTypesService {
    url = "http://localhost:8080/mediadata-service/MediaDataServices/";
    constructor(private http:Http) { }
    getCaptionTypesWithPromise(): Promise<CaptionType[]> {
        return this.http.get(this.url + "getAllCaptionTypes").toPromise()
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
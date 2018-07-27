import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { MetaItem } from './meta_item';

@Injectable()
export class MetaItemsService {
    url = "http://localhost:8080/mediadata-service/MediaDataServices/";
    constructor(private http:Http) { }
    getMetaItemsWithPromise(): Promise<MetaItem[]> {
        return this.http.get(this.url + "getAllMetaItems").toPromise()
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
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { OldMetaItem } from './old_meta_item';

@Injectable()
export class OldMetaItemsService {
    url = "http://localhost:8080/mediadata-service/MediaDataServices/";
    constructor(private http:Http) { }
    getOldMetaItemsWithPromise(): Promise<OldMetaItem[]> {
        return this.http.get(this.url + "getAllOldMetaItems").toPromise()
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
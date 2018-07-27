import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { DisplayObjectType } from './display_object_types';

@Injectable()
export class DisplayObjectTypesService {
    url = "http://localhost:8080/mediacontainer-service/ContainerServices/";
    constructor(private http:Http) { }
    getDisplayObjectTypesWithPromise(): Promise<DisplayObjectType[]> {
        return this.http.get(this.url + "getAllDisplayObjectTypes").toPromise()
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
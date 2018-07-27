import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ContainerType } from './container_types';

@Injectable()
export class ContainerTypesService {
    url = "http://localhost:8080/mediacontainer-service/ContainerServices/";
    constructor(private http:Http) { }
    getContainerTypesWithPromise(): Promise<ContainerType[]> {
        return this.http.get(this.url + "getContainerTypes").toPromise()
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
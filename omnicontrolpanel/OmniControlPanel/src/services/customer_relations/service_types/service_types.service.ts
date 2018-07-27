import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ServiceType } from './service_type';

@Injectable()
export class ServiceTypeService {
    url = "http://localhost:8080/customer-relations-service/CustomerRelations/";
    constructor(private http:Http) { }
    getServiceTypesWithPromise(): Promise<ServiceType[]> {
        return this.http.get(this.url + "getAllServiceTypes").toPromise()
        .then(this.extractData)
        .catch(this.handleErrorPromise);
    }

    private extractData(res: Response) {
        let body = res.json();
         console.log("body", body)
        return body;
    }

    private handleErrorPromise (error: Response | any ) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
}
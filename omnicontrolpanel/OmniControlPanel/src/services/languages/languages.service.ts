import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Language } from './language';

@Injectable()
export class LanguageService {
    url = "http://localhost:8080/languages-service/LanguageServices/"
    constructor(private http: Http){  }
    getLanguagesWithPromise(): Promise<Language[]> {
        return this.http.get(this.url + "getAllLanguages").toPromise()
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
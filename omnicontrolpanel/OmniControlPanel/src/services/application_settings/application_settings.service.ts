import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ApplicationSetting } from './application_setting';

@Injectable()
export class ApplicationSettingsService {
    url = "http://localhost:8080/application-settings-service/ApplicationSettings/";
    constructor(private http:Http) { }
    getApplicationSettingsWithPromise(): Promise<ApplicationSetting[]> {
        return this.http.get(this.url + "getAllApplicationSettings").toPromise()
        .then(this.extractData)
        .catch(this.handleErrorPromise);
    }

    getApplicationSettingsByNameWithPromise(applicationName: string): Promise<ApplicationSetting[]> {
        return this.http.get(this.url + "getApplicationSettingsByApplicationName?applicationname=" + applicationName).toPromise()
        .then(this.extractData)
        .catch(this.handleErrorPromise);
    }

    getApplicationSettingsByIdWithPromise(applicationId: number): Promise<ApplicationSetting[]> {
        return this.http.get(this.url + "getApplicationSettingsByApplicationId?applicationid=" + applicationId).toPromise()
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
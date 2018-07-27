import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { GalleryItem } from './gallery_item';

@Injectable()
export class GalleryItemsService {
    url = "http://localhost:8080/gallery-service/GalleryServices/";
    constructor(private http:Http) { }
    getGalleryItemsWithPromise(): Promise<GalleryItem[]> {
        return this.http.get(this.url + "getGalleryGroupTypes").toPromise()
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
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ArticleUser } from './article_user';

@Injectable()
export class ArticleUsersService {
    url = "http://localhost:8080/article-service/ArticleServices/";
    constructor(private http:Http) { }
    getArticleUsersWithPromise(): Promise<ArticleUser[]> {
        return this.http.get(this.url + "getArticleUsers").toPromise()
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
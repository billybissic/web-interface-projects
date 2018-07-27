import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ArticleComment } from './article_comment';

@Injectable()
export class ArticleCommentsService {
    url = "http://localhost:8080/article-service/ArticleServices/";
    constructor(private http:Http) { }
    getArticleCommentssWithPromise(): Promise<ArticleComment[]> {
        return this.http.get(this.url + "getArticleComments").toPromise()
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
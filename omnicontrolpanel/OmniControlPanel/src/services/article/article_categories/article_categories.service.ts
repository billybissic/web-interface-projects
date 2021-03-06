import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ArticleCategory } from './article_category';

@Injectable()
export class ArticleCategoriesService {
    url = "http://localhost:8080/article-service/ArticleServices/";
    constructor(private http:Http) { }
    getArticleCategoriesWithPromise(): Promise<ArticleCategory[]> {
        return this.http.get(this.url + "getArticleCategories").toPromise()
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
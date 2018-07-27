import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogManagerService {
    constructor (
        private http: Http
    ) {}

    getArticles() {
        return this.http.get(`http://localhost:8080/article-service/ArticleServices/getArticlePosts`)
        .map((res:Response) => res.json());
    }
}
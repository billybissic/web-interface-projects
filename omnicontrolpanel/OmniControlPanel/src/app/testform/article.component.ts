import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { Article } from './article';

@Component({ 
    selector: 'app-testform',
    templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit {
    promiseArticles: Promise<Article[]>
    articles: Article[];
    errorMessage: String;
    constructor(private articleService: ArticleService) { }
    ngOnInit(): void {
        this.promiseArticles = this.articleService.getArticlesWithPromise();
        this.promiseArticles.then(
            articles => this.articles = articles,
            error => this.errorMessage = <any>error);
    }
}

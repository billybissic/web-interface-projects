import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
/* Services */
import { ArticleAuthorsService } from '../../services/article/article_authors/article_authors.service';
import { ArticleCategoriesService } from '../../services/article/article_categories/article_categories.service';
import { ArticleCategoryRelationshipsService } from '../../services/article/article_category_relationships/article_category_relationships.service';
import { ArticleCommentsService } from '../../services/article/article_comments/article_comments.service';
import { ArticleImagesService } from '../../services/article/article_images/article_images.service';
import { ArticlePostRelationshipService } from '../../services/article/article_post_relationships/article_post_relationships.service';
import { ArticlePostsService } from '../../services/article/article_posts/article_posts.service';
import { ArticleTagsService } from '../../services/article/article_tags/article_tags.service';
import { ArticleUsersService } from '../../services/article/article_users/article_users.service';
/* Constructors */
import { ArticleAuthor } from '../../services/article/article_authors/article_author';
import { ArticleCategory } from '../../services/article/article_categories/article_category';
import { ArticleCategoryRelationship } from '../../services/article/article_category_relationships/article_category_relationship';
import { ArticleComment } from '../../services/article/article_comments/article_comment';
import { ArticleImage } from '../../services/article/article_images/article_image';
import { ArticlePostRelationship } from '../../services/article/article_post_relationships/article_post_relationship';
import { ArticlePost } from '../../services/article/article_posts/article_post';
import { ArticleTag } from '../../services/article/article_tags/article_tag';
import { ArticleUser } from '../../services/article/article_users/article_user';



@Component({
  selector: 'app-blogmanager',
  templateUrl: './blog_manager.component.html',
  styleUrls: ['./blog_manager.component.css']
})
export class BlogManagerComponent implements OnInit {
  /* promises */
  promiseArticleAuthors: Promise<ArticleAuthor[]>
  promiseArticleCategories: Promise<ArticleCategory[]>
  promiseArticleCategoryRelationships: Promise<ArticleCategoryRelationship[]>
  promiseArticleComments: Promise<ArticleComment[]>
  promiseArticleImages: Promise<ArticleImage[]>
  promiseArticlePostRelationships: Promise<ArticlePostRelationship[]>
  promiseArticlePosts: Promise<ArticlePost[]>
  promiseArticleTags: Promise<ArticleTag[]>
  promiseArticleUsers: Promise<ArticleUser[]>

  authors: ArticleAuthor[];
  categories: ArticleCategory[];
  categoryRelationships: ArticleCategoryRelationship[];
  comments: ArticleComment[];
  images: ArticleImage[];
  postRelationships: ArticlePostRelationship[];
  articles: ArticlePost[];
  tags: ArticleTag[];
  users: ArticleUser[];

  errorMessage: string;

  constructor(public auth: AuthService,
              private articleAuthorsService: ArticleAuthorsService,
              private articleCategories: ArticleCategoriesService,
              private articleCategoryRelationshipsService: ArticleCategoryRelationshipsService,
              private articleCommentsService: ArticleCommentsService,
              private articleImagesService: ArticleImagesService,
              private articlePostRelationshipsService: ArticlePostRelationshipService,
              private articlePostsService: ArticlePostsService,
              private articleTagService: ArticleTagsService,
              private articleUsersService: ArticleUsersService ) { }

  ngOnInit(): void {
    this.promiseArticleAuthors = this.articleAuthorsService.getArticleAuthorsWithPromise();
    this.promiseArticleAuthors.then(
      authors => this.authors = authors,
      error => this.errorMessage = <any>error
    );

    this.promiseArticleCategories = this.articleCategories.getArticleCategoriesWithPromise();
    this.promiseArticleCategories.then(
      categories => this.categories = categories,
      error => this.errorMessage = <any>error
    );

    this.promiseArticleCategoryRelationships = this.articleCategoryRelationshipsService.getArticleCategoryRelationshipsWithPromise();
    this.promiseArticleCategoryRelationships.then(
      categoryRelationShips => this.categoryRelationships = categoryRelationShips,
      error => this.errorMessage = <any>error
    );

    this.promiseArticleComments = this.articleCommentsService.getArticleCommentssWithPromise();
    this.promiseArticleComments.then(
      comments => this.comments = comments,
      error => this.errorMessage = <any>error
    );

    this.promiseArticleImages = this.articleImagesService.getArticleImagesWithPromise();
    this.promiseArticleImages.then(
      images => this.images = images,
      error => this.errorMessage = <any>error
    );

    this.promiseArticlePostRelationships = this.articlePostRelationshipsService.getArticlePostRelationshipsWithPromise()
    this.promiseArticlePostRelationships.then(
      postRelationships => this.postRelationships = postRelationships,
      error => this.errorMessage = <any>error
    );

    this.promiseArticlePosts = this.articlePostsService.getArticlePostsWithPromise();
    this.promiseArticlePosts.then(
      articles => this.articles = articles,
      error => this.errorMessage = <any>error
    );

    this.promiseArticleTags = this.articleTagService.getArticleTagsWithPromise();
    this.promiseArticleTags.then(
      tags => this.tags = tags,
      error => this.errorMessage = <any>error
    );

    this.promiseArticleUsers = this.articleUsersService.getArticleUsersWithPromise();
    this.promiseArticleUsers.then(
      users => this.users = users,
      error => this.errorMessage = <any>error
    );
  }

}

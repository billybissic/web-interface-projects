/* Required UI components */
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule  } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

/* UI Applications Components for application routing */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardMenuComponent } from './dashboard_menu/dashboard_menu.component';
import { DashboardContentComponent } from './dashboard_content/dashboard_content.component';
import { ProfileComponent } from './profile/profile.component';
import { LogConsoleComponent } from './log_console/log_console.component';
import { MediaPlayerComponent } from './media_player/media_player.component';
import { PhotoGalleryManagerComponent } from './photo_gallery_manager/photo_gallery_manager.component';
import { BlogManagerComponent } from './blog_manager/blog_manager.component';
import { EventManagerComponent } from './event_manager/event_manager.component';
import { ApplicationSettingsComponent } from './application_settings/application_settings.component';
import { ApplicationLogsComponent } from './application_logs/application_logs.component';
import { ApplicationsComponent } from './applications/applications.component';
import { PrivilegesComponent } from './privileges/privileges.component';
import { UserGroupsComponent } from './user_groups/user_groups.component';
import { UserPrivilegesComponent } from './user_privileges/user_privileges.component';
import { GroupTypesComponent } from './group_types/group_types.component';
import { GroupPrivilegesComponent } from './group_privileges/group_privileges.component';
import { ManageGalleriesComponent } from './manage_galleries/manage_galleries.component';
import { ThemeManagerComponent } from './theme_manager/theme_manager.component';
import { ArticleComponent } from './testform/article.component';
import { MailingListSubscribersComponent } from './manage_mailinglist_subscribers/manage_mailinglist_subscribers.component';
import { BookingInquiriesComponent } from './manage_booking_inquiries/manage_booking_inquiries.component';
import { MediaDataManagerComponent } from './manage_media_data/manage_media_data.component';
import { MediaContainerManagerComponent } from './manage_media_containers/manage_media_containers.component';
import { LanguageManagerComponent } from './language_manager/language_manager.component';
import { ManageGiftCardComponent } from './manage_giftcards/manage_giftcards.component';
import { UsersComponent } from './users/users.component';
import { UploadManagerComponent } from './upload_manager/upload_manager.component';
import { SiteManagerComponent } from './site_manager/site_manager.component';
import { PhotoGalleryComponent } from './photo_gallery/photo_gallery.component';
import { LogManagerComponent } from './log_manager/log_manager.component';
import { NewsLetterManagerComponent } from './newsletter_manager/newsletter_manager.component';
import { ManageTransactionsComponent } from './manage_transactions/manage_transactions.component';
import { ManageShipmentsComponent } from './manage_shipments/manage_shipments.component';
import { ManageOrdersComponent } from './manage_orders/manage_orders.component';
import { ManageInventoryComponent } from './manage_inventory/manage_inventory.component';
import { ManageCustomersComponent } from 'app/manage_customers/manage_customers.component';
/*import { AwesomeComponent } from './app.awesome.component';*/
import { ApplicationAvailibilityComponent } from './application_availability/application_availability.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountTypesComponent } from './account_types/account_types.component';

/*---Service Providers---*/
/* Application Settings Service */
import { ApplicationSettingsService } from './../services/application_settings/application_settings.service';
/*Article Services */
import { ArticleService } from './testform/article.service';
import { ArticleAuthorsService } from './../services/article/article_authors/article_authors.service'
import { ArticleCategoriesService } from './../services/article/article_categories/article_categories.service';
// tslint:disable-next-line:max-line-length
import { ArticleCategoryRelationshipsService } from './../services/article/article_category_relationships/article_category_relationships.service';
import { ArticleCommentsService } from './../services/article/article_comments/article_comments.service';
import { ArticleImagesService } from './../services/article/article_images/article_images.service';
// import { ArticlePostRelatonshipService } from './../services/article/article_post_relationships/article_post_relationships.service';
import { ArticlePostsService } from './../services/article/article_posts/article_posts.service';
import { ArticleTagsService } from './../services/article/article_tags/article_tags.service';
import { ArticleUsersService } from './../services/article/article_users/article_users.service';
/*Gallery Services */
import { GalleryService } from './../services/media_gallery/galleries/gallery.service';
import { GalleryChildrenService  } from './../services/media_gallery/gallery_children/gallery_children.service';
import { GalleryGroupTypesService } from './../services/media_gallery/gallery_group_types/gallery_group_types.service';
import { GalleryItemsService } from './../services/media_gallery/gallery_items/gallery_items.service';
import { GalleryObjectTypesService } from './../services/media_gallery/gallery_object_types/gallery_object_types.service';
import { GalleryStatsService } from './../services/media_gallery/gallery_stats/gallery_stats.service';
/* MediaContainer Services */
import { ContainerOrderTypeService } from './../services/media_containers/container_order_type/container_order_type.service';
import { ContainerPermissionsService } from './../services/media_containers/container_permissions/container_permissions.service';
import { ContainerTypesService } from './../services/media_containers/container_types/container_types.service';
import { DisplayObjectTypesService } from './../services/media_containers/display_object_types/display_object_types.service';
import { DisplayObjectsService } from './../services/media_containers/display_objects/display_object.service';
import { MediaContainersService } from './../services/media_containers/media_containers/media_container.service';
/* MediaData Services */
import { CaptionTypesService } from './../services/media_data/caption_types/caption_types.service';
import { CaptionsService } from './../services/media_data/captions/captions.service';
import { MediaTypesService } from './../services/media_data/media_types/media_types.service';
import { MetaItemsService } from './../services/media_data/meta_items/meta_items.service';
import { MimeTypeCategoryService } from './../services/media_data/mime_type_categories/mime_type_categories.service';
import { OldMetaItemsService } from './../services/media_data/old_meta_items/old_meta_items.service'
/* CustomerRelations Services */
import { MailinglistService } from './../services/customer_relations/mailinglist/mailinglist.service';
import { BookingInquiryService } from './../services/customer_relations/booking_inquiries/booking_inquiry.service';
import { ServiceTypeService } from './../services/customer_relations/service_types/service_types.service'
/* Language Services */
import { LanguageService } from './../services/languages/languages.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    DashboardMenuComponent,
    DashboardContentComponent,
    ProfileComponent,
    MediaPlayerComponent,
    PhotoGalleryManagerComponent,
    BlogManagerComponent,
    LogConsoleComponent,
    EventManagerComponent,
    ApplicationSettingsComponent,
    ApplicationLogsComponent,
    ApplicationsComponent,
    PrivilegesComponent,
    UserGroupsComponent,
    UserPrivilegesComponent,
    GroupTypesComponent,
    GroupPrivilegesComponent,
    ManageGalleriesComponent,
    ThemeManagerComponent,
    ArticleComponent,
    MailingListSubscribersComponent,
    BookingInquiriesComponent,
    LanguageManagerComponent,
    MediaDataManagerComponent,
    MediaContainerManagerComponent,
    ManageGiftCardComponent,
    UsersComponent,
    UploadManagerComponent,
    SiteManagerComponent,
    PhotoGalleryComponent,
    LogManagerComponent,
    NewsLetterManagerComponent,
    ManageTransactionsComponent,
    ManageShipmentsComponent,
    ManageOrdersComponent,
    ManageInventoryComponent,
    ManageCustomersComponent,
    /*AwesomeComponent,*/
    ApplicationAvailibilityComponent,
    AccountsComponent,
    AccountTypesComponent,
    CallbackComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    // AngularSvgIconModule
  ],
  providers: [AuthService,
              ApplicationSettingsService,
              ArticleService,
              ArticleAuthorsService,
              ArticleCategoriesService,
              ArticleCategoryRelationshipsService,
              ArticleCommentsService,
              ArticleImagesService,
            //  ArticlePostRelationshipService,
              ArticlePostsService,
              ArticleTagsService,
              ArticleUsersService,
              BookingInquiryService,
              CaptionsService,
              CaptionTypesService,
              ContainerOrderTypeService,
              ContainerPermissionsService,
              ContainerTypesService,
              DisplayObjectTypesService,
              DisplayObjectsService,
              GalleryService,
              GalleryChildrenService,
              GalleryGroupTypesService,
              GalleryItemsService,
              GalleryObjectTypesService,
              GalleryStatsService,
              LanguageService,
              MailinglistService,
              MediaContainersService,
              MediaTypesService,
              MimeTypeCategoryService,
              OldMetaItemsService,
              ServiceTypeService
            ],
  bootstrap: [AppComponent] // come back to bootstrap dashboard component , DashboardComponent]
})
export class AppModule { }
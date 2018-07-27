import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
/* Services */
import { GalleryService  } from '../../services/media_gallery/galleries/gallery.service';
import { GalleryChildrenService  } from '../../services/media_gallery/gallery_children/gallery_children.service';
import { GalleryGroupTypesService  } from '../../services/media_gallery/gallery_group_types/gallery_group_types.service';
import { GalleryItemsService  } from '../../services/media_gallery/gallery_items/gallery_items.service';
import { GalleryObjectTypesService  } from '../../services/media_gallery/gallery_object_types/gallery_object_types.service';
import { GalleryStatsService  } from '../../services/media_gallery/gallery_stats/gallery_stats.service';
import { DisplayObjectTypesService } from '../../services/media_containers/display_object_types/display_object_types.service';
import { DisplayObjectsService } from '../../services/media_containers/display_objects/display_object.service';
import { ContainerTypesService } from '../../services/media_containers/container_types/container_types.service';
/* Constructors */
import { Gallery } from '../../services/media_gallery/galleries/gallery';
import { GalleryChildren } from '../../services/media_gallery/gallery_children/gallery_children';
import { GalleryGroupType } from '../../services/media_gallery/gallery_group_types/gallery_group_type';
import { GalleryItem } from '../../services/media_gallery/gallery_items/gallery_item';
import { GalleryObjectType } from '../../services/media_gallery/gallery_object_types/gallery_object_type';
import { GalleryStat } from '../../services/media_gallery/gallery_stats/gallery_stat';
import { DisplayObjectType } from '../../services/media_containers/display_object_types/display_object_types';
import { DisplayObject } from '../../services/media_containers/display_objects/display_objects';
import { ContainerType } from '../../services/media_containers/container_types/container_types';
@Component({
  selector: 'app-managegalleries',
  templateUrl: './manage_galleries.component.html',
  styleUrls: ['./manage_galleries.component.css']
})
export class ManageGalleriesComponent implements OnInit {
  /* promises */
  promiseGalleries: Promise<Gallery[]>
  promiseGalleryChildren: Promise<GalleryChildren[]>
  promiseGalleryGroupTypes: Promise<GalleryGroupType[]>
  promiseGalleryItems: Promise<GalleryItem[]>
  promiseGalleryObjectTypes: Promise<GalleryObjectType[]>
  promiseGalleryStats: Promise<GalleryStat[]>
  promiseDisplayObjectTypes: Promise<DisplayObjectType[]>
  promiseDisplayObject: Promise<DisplayObject[]>
  promiseContainerTypes: Promise<ContainerType[]>

  /* properties */
  galleries: Gallery[];
  galleryChildren: GalleryChildren[];
  galleryGroupTypes: GalleryGroupType[];
  galleryItems: GalleryItem[];
  galleryObjectTypes: GalleryObjectType[];
  galleryStats: GalleryStat[];
  displayObjects: DisplayObject[];
  displayObjectTypes: DisplayObjectType[];
  containerTypes: ContainerType[];

  errorMessage: string;

  constructor(public auth: AuthService,
              private galleryServices: GalleryService,
              private galleryChildrenService: GalleryChildrenService,
              private galleryGroupTypesService: GalleryGroupTypesService,
              private galleryItemsService: GalleryItemsService,
              private galleryObjectTypesService: GalleryObjectTypesService,
              private galleryStatsService: GalleryStatsService,
              private displayObjectService: DisplayObjectsService,
              private displayObjectTypesService: DisplayObjectTypesService,
              private containerTypesService: ContainerTypesService ) { }

  ngOnInit(): void {
    this.promiseGalleries = this.galleryServices.getGalleriesWithPromise();
    this.promiseGalleries.then(
      galleries => this.galleries = galleries,
      error => this.errorMessage = <any>error
    );

    this.promiseGalleryChildren = this.galleryChildrenService.getGalleryChildrenWithPromise();
    this.promiseGalleryChildren.then(
      galleryChildren => this.galleryChildren = galleryChildren,
      error => this.errorMessage = <any>error
    );

    this.promiseGalleryGroupTypes = this.galleryGroupTypesService.getGalleryGroupTypesWithPromise();
    this.promiseGalleryGroupTypes.then(
      galleryGroupTypes => this.galleryGroupTypes = galleryGroupTypes,
      error => this.errorMessage = <any>error
    );

    this.promiseGalleryItems = this.galleryItemsService.getGalleryItemsWithPromise();
    this.promiseGalleryItems.then(
      galleryItems => this.galleryItems = galleryItems,
      error => this.errorMessage = <any>error
    );

    this.promiseGalleryObjectTypes = this.galleryObjectTypesService.getGalleryObjectTypesWithPromise();
    this.promiseGalleryObjectTypes.then(
      galleryObjectTypes => this.galleryObjectTypes = galleryObjectTypes,
      error => this.errorMessage = <any>error
    );
    
    this.promiseGalleryStats = this.galleryStatsService.getGalleryStatsWithPromise();
    this.promiseGalleryStats.then(
      galleryStats => this.galleryStats = galleryStats,
      error => this.errorMessage = <any>error
    );
    
    this.promiseDisplayObject = this.displayObjectService.getDisplayObjectsWithPromise();
    this.promiseDisplayObject.then(
      displayObjects => this.displayObjects = displayObjects,
      error => this.errorMessage = <any>error
    );

    this.promiseDisplayObjectTypes = this.displayObjectTypesService.getDisplayObjectTypesWithPromise();
    this.promiseDisplayObjectTypes.then(
      displayObjectTypes => this.displayObjectTypes = displayObjectTypes,
      error => this.errorMessage = <any>error
    );

    this.promiseContainerTypes = this.containerTypesService.getContainerTypesWithPromise();
    this.promiseContainerTypes.then(
      containerTypes => this.containerTypes = containerTypes,
      error => this.errorMessage = <any>error
    );

  }

}

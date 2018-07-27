import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { CaptionTypesService } from '../../services/media_data/caption_types/caption_types.service'

import { CaptionType } from '../../services/media_data/caption_types/caption_type'

@Component({
  selector: 'app-mediadata',
  templateUrl: './manage_media_data.component.html',
  styleUrls: ['./manage_media_data.component.css']
})
export class MediaDataManagerComponent implements OnInit {
  /* promises */
  promiseCaptionTypes: Promise<CaptionType[]>
  /* properties */
  captionTypes: CaptionType[];

  errorMessage: string;

  constructor(public auth: AuthService,
              private captionTypesService: CaptionTypesService) { }

  ngOnInit(): void {

    this.promiseCaptionTypes = this.captionTypesService.getCaptionTypesWithPromise();
    this.promiseCaptionTypes.then(
      captionTypes => this.captionTypes = captionTypes,
      error => this.errorMessage = <any>error
    );
  }

}

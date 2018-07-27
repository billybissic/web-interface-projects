import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-photogallerymanager',
  templateUrl: './photo_gallery_manager.component.html',
  styleUrls: ['./photo_gallery_manager.component.css']
})
export class PhotoGalleryManagerComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

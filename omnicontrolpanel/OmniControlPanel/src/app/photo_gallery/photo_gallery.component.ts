import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-photogallery',
  templateUrl: './photo_gallery.component.html',
  styleUrls: ['./photo_gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-mediadata',
  templateUrl: './manage_media_containers.component.html',
  styleUrls: ['./manage_media_containers.component.css']
})
export class MediaContainerManagerComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

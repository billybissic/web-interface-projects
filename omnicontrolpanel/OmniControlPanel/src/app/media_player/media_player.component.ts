import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './media_player.component.html',
  styleUrls: ['./media_player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

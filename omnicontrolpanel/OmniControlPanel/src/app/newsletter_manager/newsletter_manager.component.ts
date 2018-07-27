import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-newslettermanager',
  templateUrl: './newsletter_manager.component.html',
  styleUrls: ['./newsletter_manager.component.css']
})
export class NewsLetterManagerComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

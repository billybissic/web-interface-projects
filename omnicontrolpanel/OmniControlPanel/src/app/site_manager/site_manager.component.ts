import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-sitemanager',
  templateUrl: './site_manager.component.html',
  styleUrls: ['./site_manager.component.css']
})
export class SiteManagerComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

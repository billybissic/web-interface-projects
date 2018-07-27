import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard_menu.component.html',
  styleUrls: ['./dashboard_menu.component.css']
})
export class DashboardMenuComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
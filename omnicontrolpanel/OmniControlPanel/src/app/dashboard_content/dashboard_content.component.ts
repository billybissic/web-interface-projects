import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard_content.component.html',
  styleUrls: ['./dashboard_content.component.css']
})
export class DashboardContentComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
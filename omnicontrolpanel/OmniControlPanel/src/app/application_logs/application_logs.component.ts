import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-applicationlogs',
  templateUrl: './application_logs.component.html',
  styleUrls: ['./application_logs.component.css']
})
export class ApplicationLogsComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

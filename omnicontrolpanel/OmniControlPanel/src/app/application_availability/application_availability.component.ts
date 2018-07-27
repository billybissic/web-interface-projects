import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-applicationavailibility',
  templateUrl: './application_availability.component.html',
  styleUrls: ['./application_availability.component.css']
})
export class ApplicationAvailibilityComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

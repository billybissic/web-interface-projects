import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-eventmanager',
  templateUrl: './event_manager.component.html',
  styleUrls: ['./event_manager.component.css']
})
export class EventManagerComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

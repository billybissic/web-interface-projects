import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-logmanager',
  templateUrl: './log_manager.component.html',
  styleUrls: ['./log_manager.component.css']
})
export class LogManagerComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-logconsole',
  templateUrl: './log_console.component.html',
  styleUrls: ['./log_console.component.css']
})
export class LogConsoleComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

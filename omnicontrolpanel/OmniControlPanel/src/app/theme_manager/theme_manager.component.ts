import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-thememanager',
  templateUrl: './theme_manager.component.html',
  styleUrls: ['./theme_manager.component.css']
})
export class ThemeManagerComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-userprivileges',
  templateUrl: './user_privileges.component.html',
  styleUrls: ['./user_privileges.component.css']
})
export class UserPrivilegesComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

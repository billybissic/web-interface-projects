import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-groupprivileges',
  templateUrl: './group_privileges.component.html',
  styleUrls: ['./group_privileges.component.css']
})
export class GroupPrivilegesComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

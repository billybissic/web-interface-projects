import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-usergroups',
  templateUrl: './user_groups.component.html',
  styleUrls: ['./user_groups.component.css']
})
export class UserGroupsComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-grouptypes',
  templateUrl: './group_types.component.html',
  styleUrls: ['./group_types.component.css']
})
export class GroupTypesComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

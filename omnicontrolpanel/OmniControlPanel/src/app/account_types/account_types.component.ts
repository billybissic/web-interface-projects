import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-accounttypes',
  templateUrl: './account_types.component.html',
  styleUrls: ['./account_types.component.css']
})
export class AccountTypesComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

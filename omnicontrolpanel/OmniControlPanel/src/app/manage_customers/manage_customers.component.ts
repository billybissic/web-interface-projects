import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-managecustomers',
  templateUrl: './manage_customers.component.html',
  styleUrls: ['./manage_customers.component.css']
})
export class ManageCustomersComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

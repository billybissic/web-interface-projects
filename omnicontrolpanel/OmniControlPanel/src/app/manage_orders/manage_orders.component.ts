import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-manageorders',
  templateUrl: './manage_orders.component.html',
  styleUrls: ['./manage_orders.component.css']
})
export class ManageOrdersComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-manageshipments',
  templateUrl: './manage_shipments.component.html',
  styleUrls: ['./manage_shipments.component.css']
})
export class ManageShipmentsComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

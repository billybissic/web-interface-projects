import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-manageinventory',
  templateUrl: './manage_inventory.component.html',
  styleUrls: ['./manage_inventory.component.css']
})
export class ManageInventoryComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-managegiftcards',
  templateUrl: './manage_giftcards.component.html',
  styleUrls: ['./manage_giftcards.component.css']
})
export class ManageGiftCardComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

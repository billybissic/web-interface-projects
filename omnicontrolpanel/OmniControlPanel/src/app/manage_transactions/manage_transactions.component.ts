import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-managetransactions',
  templateUrl: './manage_transactions.component.html',
  styleUrls: ['./manage_transactions.component.css']
})
export class ManageTransactionsComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

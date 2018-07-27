import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-uploadmanager',
  templateUrl: './upload_manager.component.html',
  styleUrls: ['./upload_manager.component.css']
})
export class UploadManagerComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

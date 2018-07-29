import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: [ './announcement.component.css'],
})

export class AnnouncmentComponent {

  errorMessage = "";
  loading = false;

  constructor() {
  }

}
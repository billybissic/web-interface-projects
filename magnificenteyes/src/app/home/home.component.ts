import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css'],
})

export class HomeComponent {

  errorMessage = "";
  loading = false;

  constructor() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-navigation',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.css'],
})

export class NavigationComponent {

  errorMessage = "";
  loading = false;

  constructor() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../auth/auth.service';
import { ApplicationSettingsService } from '../../services/application_settings/application_settings.service';
import { ApplicationSetting } from '../../services/application_settings/application_setting';

@Component({
  selector: 'app-applicationsettings',
  templateUrl: './application_settings.component.html',
  styleUrls: ['./application_settings.component.css']
})
export class ApplicationSettingsComponent implements OnInit {

  promiseApplicationSettings: Promise<ApplicationSetting[]>
  applicationSettings: ApplicationSetting[];

  constructor(public auth: AuthService,
              private applicationSettingsService: ApplicationSettingsService,
              ) { }

  ngOnInit(): void {

 this.promiseApplicationSettings = this.applicationSettingsService.getApplicationSettingsByNameWithPromise("mailinglist");
    this.promiseApplicationSettings.then(
      applicationSettings => this.applicationSettings = applicationSettings,
      //error => this.errorMessage = <any>error
    );
}
/*export class ApplicationSettingsPage {

  public applicationSettingsForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]


  });

  constructor(public fb: FormBuilder) {}
  
  doLogin(event) {
    console.log(event);
    console.log(this.applicationSettingsForm.value);
  }*/
  
}

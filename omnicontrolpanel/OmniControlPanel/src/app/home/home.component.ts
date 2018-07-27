import { Component, OnInit, NgModule, Inject } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';
import { AuthService } from './../auth/auth.service';
import { ApplicationSettingsService } from '../../services/application_settings/application_settings.service';
import { MailinglistService } from '../../services/customer_relations/mailinglist/mailinglist.service';
import { ServiceTypeService } from '../../services/customer_relations/service_types/service_types.service';
import { ApplicationSetting } from '../../services/application_settings/application_setting';
import { Mailinglist } from '../../services/customer_relations/mailinglist/mailinglist';
import { ServiceType } from '../../services/customer_relations/service_types/service_type';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
    /* promises */
  promiseMailingList: Promise<Mailinglist[]>
  promiseApplicationSettings: Promise<ApplicationSetting[]>
  promiseServiceTypes: Promise<ServiceType[]>
  /* properties */
  mailingListEntries: Mailinglist[];
  mailinglistEntries = [];
  applicationSettings: ApplicationSetting[];

  serviceTypesEntities: ServiceType[];
  //newSignee: Mailinglist[];
  birthdayRequired: string;
  errorMessage: string;
  subscribe: boolean;
  
  constructor(@Inject(FormBuilder) fb: FormBuilder,
              public auth: AuthService,
              private applicationSettingsService: ApplicationSettingsService,
              private mailinglistService: MailinglistService,
              private serviceTypeService: ServiceTypeService) { 
                
              }

  ngOnInit(): void {
    this.promiseServiceTypes = this.serviceTypeService.getServiceTypesWithPromise();
    this.promiseServiceTypes.then(
      serviceTypesEntities => this.serviceTypesEntities = serviceTypesEntities,
      error => this.errorMessage = <any>error
    );

    this.promiseApplicationSettings = this.applicationSettingsService.getApplicationSettingsByNameWithPromise("mailinglist");
    this.promiseApplicationSettings.then(
      applicationSettings => this.applicationSettings = applicationSettings,
      error => this.errorMessage = <any>error
    );
    console.log("this.applicationSettings:", this.applicationSettings);
    if(this.applicationSettings != null)
    {
      console.log("searching for application settings");
      for (var i = 0; i < this.applicationSettings.length; i++) {
        var applicationSettingsData = this.applicationSettings[i];
        if( applicationSettingsData.applicationSettingName == "birthdateRequired")
        {
          this.birthdayRequired = applicationSettingsData.applicationSettingValue;
          console.log('this.birthdayRequired value:', this.birthdayRequired)
          break;
        }
      }
    }
  }

  onSubmit(form: any) {
    
    console.log('you submitted value:', form);
    console.log('this.firstName:', this.firstName );
    console.log('this.lastName:', this.lastName);
    console.log('this.email:', this.email);

    this.subscribe = false;
    console.log("this.subscribe", this.subscribe);
    /* check to see if the subscriber has already subscribed */
    this.promiseMailingList = this.mailinglistService.getMailingListEntryByEmailWithPromise(this.email);
    console.log("inside of promise this.email", this.email);
      this.promiseMailingList.then(
        mailingListEntries => this.mailingListEntries = mailingListEntries,
        error => this.errorMessage = <any>error
      );
    console.log("this.mailingListEntries:", this.mailingListEntries.length);

    //console.log("this.mailingListEntries.length", this.mailingListEntries.length);
    //console.log("this.mailingListEntries.length:", this.mailingListEntries);
    for (var i = 0; i < this.mailingListEntries.length; i++) {
      var mailingListEntryData = this.mailingListEntries[i];
      if ( mailingListEntryData.email == this.email) {
        this.subscribe = true;
        break;
      }
    }

    /*this.mailinglistService.getMailingListEntryByEmailedWithPromise(this.email).subscribe(
      resMailinglistData => this.mailinglistEntries = resMailinglistData);*/

    console.log("this.subscribe:", this.subscribe);
    /* subscribe if email does not exist already */
    if (this.subscribe = true)
    {
      
      if (this.birthdayRequired == "1") {
        this.promiseMailingList = this.mailinglistService.addNewSubscriberWithPromise(this.firstName,
                                                                                      this.lastName,
                                                                                      this.email,
                                                                                      this.birthday);
        this.promiseMailingList.then(
          mailingListEntries => this.mailingListEntries = mailingListEntries,
          error => this.errorMessage = <any>error
        );

        if (this.errorMessage == null)
          {
            this.subscribe = false;
            /* subscription was successful send success message & set the subscribe back to false */
          }
      }
      else {
        this.promiseMailingList = this.mailinglistService.addNewSubscriberWithBirthdayWithPromise(this.firstName,
                                                                                    this.lastName, 
                                                                                    this.email);
        this.promiseMailingList.then(
          mailingListEntries => this.mailingListEntries = mailingListEntries,
          error => this.errorMessage = <any>error
        );

        if (this.errorMessage == null)
          {
            /* subscription was successful send success message & set the subscribe back to false */
            this.subscribe = false;
          }
      }
    }
  }
}

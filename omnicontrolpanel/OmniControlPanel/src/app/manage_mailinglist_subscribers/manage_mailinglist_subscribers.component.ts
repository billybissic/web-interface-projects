import { Component, OnInit } from '@angular/core';
/* Services */
import { AuthService } from './../auth/auth.service';
import { ApplicationSettingsService } from '../../services/application_settings/application_settings.service';
import { MailinglistService } from '../../services/customer_relations/mailinglist/mailinglist.service';
/* Constructors */
import { ApplicationSetting } from '../../services/application_settings/application_setting';
import { Mailinglist } from '../../services/customer_relations/mailinglist/mailinglist';

@Component({
  selector: 'app-mailinglistsubscribers',
  templateUrl: './manage_mailinglist_subscribers.component.html',
  styleUrls: ['./manage_mailinglist_subscribers.component.css']
})
export class MailingListSubscribersComponent implements OnInit {
  /* promises */
  promiseMailingList: Promise<Mailinglist[]>
  promiseApplicationSettings: Promise<ApplicationSetting[]>
  /* properties */
  mailingListEntries: Mailinglist[];
  applicationSettings: ApplicationSetting[];

  errorMessage: string;

  constructor(public auth: AuthService,
              private mailinglistService: MailinglistService,
              private applicationSettingsService: ApplicationSettingsService) { }

  ngOnInit(): void {
    this.promiseMailingList = this.mailinglistService.getMailingListsEntriesWithPromise();
    this.promiseMailingList.then(
      mailingListEntries => this.mailingListEntries = mailingListEntries,
      error => this.errorMessage = <any>error
    );

    this.promiseApplicationSettings = this.applicationSettingsService.getApplicationSettingsByNameWithPromise("mailinglist");
    this.promiseApplicationSettings.then(
      applicationSettings => this.applicationSettings = applicationSettings,
      error => this.errorMessage = <any>error
    );

  }

}

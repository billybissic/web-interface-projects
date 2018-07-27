import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { LanguageService } from '../../services/languages/languages.service';
import { Language } from '../../services/languages/language';

@Component({
  selector: 'app-languagemanager',
  templateUrl: './language_manager.component.html',
  styleUrls: ['./language_manager.component.css']
})
export class LanguageManagerComponent implements OnInit {
  promiseLanguages: Promise<Language[]>
  
  languageEntities: Language[];

  errorMessage:string;

  constructor(public auth: AuthService,
             private languageService: LanguageService) { }

  

  ngOnInit() {
    this.promiseLanguages = this.languageService.getLanguagesWithPromise();
    this.promiseLanguages.then(
      languageEntities => this.languageEntities = languageEntities,
      error => this.errorMessage = <any>error
    );
  }

}

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Mailinglist } from './mailinglist';

@Injectable()
export class MailinglistService {
    //mailinglist: MailingList[];
    //this.mailinglist = new MailingList();
    url = "http://localhost:8080/customer-relations-service/CustomerRelations/";

    constructor(private http:Http) { }
    getMailingListsEntriesWithPromise(): Promise<Mailinglist[]> {
        return this.http.get(this.url + "getAllMailinglistEntries").toPromise()
        .then(this.extractData)
        .catch(this.handleErrorPromise);
    }
    /*getMailingListEntryByEmailedWithPromise(email: string){
        return this.http.get(this.url + "getMailingListEntryByEmail?"
                                      + "email=" + email).map((response: Response) => response.json)
    }*/
    
    getMailingListEntryByEmailWithPromise(email: string): Promise<Mailinglist[]> {
        return this.http.get(this.url + "getMailingListEntryByEmail?"
                                      + "email=" + email)
                                      .toPromise()
        .then(this.extractData)
        .catch(this.handleErrorPromise);
        
    }

    /*getMailingListEntryByEmail(email: string){
        this.http.get(this.url + "getMailingListEntryByEmail?"
                               + "email=" + email)
        .map((res: Response) => res.Json())
        .subscribe((json: Object) => {
            this.mailinglist = new MailingList().fromJSON(json);
        });
    }*/

    addNewSubscriberWithPromise(firstname: string,
                                lastname: string,
                                email: string,
                                birthday: string): Promise<Mailinglist[]> {
        return this.http.get(this.url + "addNewMailinglistEntry?" 
                                      + "firstname=" + firstname 
                                      + "&lastname=" + lastname
                                      + "&email=" + email
                                      + "&birthday=" + birthday).toPromise()
        .then(this.extractData)
        .catch(this.handleErrorPromise);
    }

    addNewSubscriberWithBirthdayWithPromise(firstname: string,
                                            lastname: string,
                                            email: string): Promise<Mailinglist[]> {
        return this.http.get(this.url + "addNewMailingListEntryWithoutBirthday?" 
                                      + "firstname=" + firstname 
                                      + "&lastname=" + lastname
                                      + "&email=" + email).toPromise()
        .then(this.extractData)
        .catch(this.handleErrorPromise);

    }
    private extractData(res: Response) {
        let body = res.json();
        console.log(res);
        console.log("body.birthday", body[0].birthday)
        console.log("body.firstname", body[0].firstName)
        console.log("body.lastname", body[0].lastName)
        console.log("body.email", body[0].email)
        /*break down the extract data functionality and assign it out to the appropriate construct and return the results*/
        //let mailinglistentry
        console.log("body:", body);
        return body;
    }

    private extractMailingListEntryByEmail(res: Response) {
        let body = res.json();

    }
    private handleErrorPromise (error: Response | any ) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
}
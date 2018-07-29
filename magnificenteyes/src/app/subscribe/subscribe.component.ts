import { Component, OnInit, Input } from '@angular/core';
import { SubscriberService } from './../../services/subscriber/subscriber.service';
import { Subscriber } from './../../services/subscriber/subscriber';
import { ReturnMessage } from './../../services/subscriber/returnMessage';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: [ './subscribe.component.css'],
  providers: [SubscriberService, FormBuilder]
})

export class SubscribeComponent {

  subscriber: Subscriber = new Subscriber();
  errorMessage = "";
  loading = false;
  subscriberForm: FormGroup;


  constructor(private subscriberService: SubscriberService,
              private subscriberFormBuilder: FormBuilder ) {
  }

  ngOnInit() {
    this.subscriberForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    /* assign the form values to the constructor */
    this.subscriber.first_name = this.subscriberForm.controls['firstname'].value;
    this.subscriber.last_name = this.subscriberForm.controls['lastname'].value;
    this.subscriber.subscriber_email = this.subscriberForm.controls['email'].value;

    /* reset the form model */
    this.resetModel();

    /* submit the subscriber to the service */
    this.subscriberService.addSubscriber(this.subscriber)
      .subscribe(response => {
      }, error => this.errorMessage = <any>error); 
    
    /* ToDo: open modal dialog box to return generic message to user for error/success */
  }

  resetModel() {
    this.subscriberForm.setValue({firstname: '', lastname: '', email: ''});
    this.subscriberForm.markAsUntouched;
    this.subscriberForm.markAsPristine;
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { SubscriberService } from './../../services/subscriber/subscriber.service';
import { Subscriber } from './../../services/subscriber/subscriber';
import { ReturnMessage } from './../../services/subscriber/returnMessage';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: [ './subscribe.component.css'],
  providers: [SubscriberService]
})

export class SubscribeComponent {

  subscriber: Subscriber = new Subscriber();
  errorMessage = "";
  loading = false;

  constructor(private subscriberService: SubscriberService) {
  }

  onSubmit() {
    this.subscriberService.addSubscriber(this.subscriber)
      .subscribe(response => {
      }, error => this.errorMessage = <any>error);
  }
}

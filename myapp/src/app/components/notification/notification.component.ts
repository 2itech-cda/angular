import { Component, OnInit } from '@angular/core';
import Message from 'src/app/models/Message';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  messages: Message[] = [];

  constructor(private notification: NotificationService) { }

  ngOnInit(): void {
    this.notification.channel
      .subscribe((message: Message) => this.messages = [message, ...this.messages])
  }

  onClose(index: number): void {
    this.messages.splice(index, 1);
  }
}

import { Component, OnInit } from '@angular/core';
import Message from 'src/app/models/Message';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  messages: Message[] = [];

  constructor() { }

  ngOnInit(): void { }

}

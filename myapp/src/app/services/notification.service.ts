import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Message from '../models/Message';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  channel: Subject<Message> = new Subject<Message>();

  constructor() { }

  notify(message: Message): void {
    this.channel.next(message);
  }

  reset() {
    this.channel.next();
  }

}

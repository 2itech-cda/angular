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

  success(message: string): void {
    this.notify({text: message, level: 'success'});
  }

  error(message: string): void {
    this.notify({text: message, level: 'danger'});
  }

  info(message: string): void {
    this.notify({text: message, level: 'info'});
  }

  warn(message: string): void {
    this.notify({text: message, level: 'warn'});
  }

  reset() {
    this.channel.next();
  }

}

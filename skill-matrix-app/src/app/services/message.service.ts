import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    setTimeout(() =>
    this.messages.push(message),
      10)
  }

  clear() {
    this.messages = [];
  }
}

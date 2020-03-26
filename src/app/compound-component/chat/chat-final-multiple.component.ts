import {Component} from '@angular/core';

@Component({
  selector: 'app-chat-final-multiple',
  template: `
    <div>
      <h3>Chatroom Mutiple children</h3>
    </div>
  `
})
export class ChatFinalMultipleComponent {
  messages = [];
  currentMessage = '';

  constructor() {
  }
}

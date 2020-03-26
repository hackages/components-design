import {Component} from '@angular/core';

@Component({
  selector: 'app-chat-final',
  template: `
    <div>
      <h3>Chatroom Final</h3>
    </div>
  `
})
export class ChatFinalComponent {
  messages = [];
  currentMessage = '';

  constructor() {
  }

}

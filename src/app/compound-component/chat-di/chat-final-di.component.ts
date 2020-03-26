import {Component} from '@angular/core';

@Component({
  selector: 'app-chat-final-di',
  template: `
    <div>
      <h3>Chatroom Di</h3>
    </div>
  `
})
export class ChatFinalDiComponent {
  currentMessage = '';
  messages = [];

  constructor() {
  }

}

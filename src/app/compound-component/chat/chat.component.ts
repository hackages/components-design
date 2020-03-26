import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat',
  template: `
    <div>
      <h3>Chatroom</h3>
      <app-chat-messages [messages]="messages"></app-chat-messages>
      <app-chat-input [value]="currentMessage" (messageChange)="updateCurrentMessage($event)">
      </app-chat-input>
      <app-chat-button (click)="add()"></app-chat-button>
    </div>
  `
})
export class ChatComponent implements OnInit {
  messages = [];
  currentMessage = '';

  constructor() {
  }

  ngOnInit() {
  }

  updateCurrentMessage(currentMessage) {
    this.currentMessage = currentMessage;
  }

  add() {
    if (this.currentMessage) {
      this.messages = [...this.messages, this.currentMessage];
      this.currentMessage = '';
    }
  }
}

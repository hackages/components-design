import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-messages',
  template: `
    <ul>
      <li *ngIf="messages?.length===0"> No messages</li>
      <li *ngFor="let msg of messages">{{msg}}</li>
    </ul>
  `,
})
export class ChatMessagesComponent implements OnInit {
  @Input()
  messages = [];

  constructor() {
  }

  ngOnInit() {
  }

}

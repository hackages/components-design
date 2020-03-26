import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-compound-component-demo',
  template: `
    <h1>Compound Component</h1>
    <app-chat></app-chat>
    <hr/>
    <app-chat-final>
      <app-chat-messages></app-chat-messages>
      <app-chat-input></app-chat-input>
      <app-chat-button></app-chat-button>
    </app-chat-final>
    <app-chat-final-multiple>
      <app-chat-messages></app-chat-messages>
      <app-chat-input></app-chat-input>
      <app-chat-button></app-chat-button>
      Duplicated:<app-chat-button></app-chat-button>
    </app-chat-final-multiple>
    <app-chat-final-di>
      <app-chat-messages-di></app-chat-messages-di>
      <app-chat-input-di></app-chat-input-di>
      <app-chat-button-di></app-chat-button-di>
      <app-chat-embedded-button></app-chat-embedded-button>
    </app-chat-final-di>
  `
})
export class DemoComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
}

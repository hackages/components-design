import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-chat-input",
  template: `
    <input
      type="text"
      [value]="value"
      (input)="messageChange.emit($event.target.value)"
    />
  `
})
export class ChatInputComponent {
  @Input() value;

  @Output() messageChange = new EventEmitter<string>();

  constructor() {}
}

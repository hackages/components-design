import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-chat-button',
  template: `
    <button (click)="click.emit()">Add</button>
  `,
})
export class ChatButtonComponent implements OnInit {
  @Output() click = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DemoComponent} from './demo.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ChatComponent} from './chat/chat.component';
import {ChatMessagesComponent} from './chat/chat-messages.component';
import {ChatInputComponent} from './chat/chat-input.component';
import {ChatButtonComponent} from './chat/chat-button.component';
import {ChatFinalComponent} from './chat/chat-final.component';
import {ChatFinalMultipleComponent} from './chat/chat-final-multiple.component';
import {ChatEmbeddedButtonComponent} from './chat-di/chat-embedded-button.component';
import {ChatFinalDiComponent} from './chat-di/chat-final-di.component';
import {ChatButtonDiComponent} from './chat-di/chat-button-di.component';
import {ChatInputDiComponent} from './chat-di/chat-input-di.component';
import {ChatMessagesDiComponent} from './chat-di/chat-messages-di.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoComponent,
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [
    DemoComponent,
    ChatComponent,
    ChatMessagesComponent,
    ChatInputComponent,
    ChatButtonComponent,
    ChatFinalComponent,
    ChatFinalMultipleComponent,
    ChatFinalDiComponent,
    ChatEmbeddedButtonComponent,
    ChatButtonDiComponent,
    ChatInputDiComponent,
    ChatMessagesDiComponent
  ]
})
export class CompoundComponentModule {
}

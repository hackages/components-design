import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {App_ROUTES} from './app.routes';
import {HomeComponent} from './home.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(App_ROUTES),
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {DemoComponent} from './demo.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {LinksComponent} from './links.component';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
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
    LinksComponent
  ],
  entryComponents: [
    LinksComponent
  ]
})
export class DynamicComponentModule {
}

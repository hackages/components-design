import {Component} from '@angular/core';

@Component({
  selector: 'app-links',
  template: `
    <h2>Links to start: </h2>
    <ul>
      <li>
        <h3><a href="/di">DI: the new Treeshakable Providers API</a></h3>
      </li>
      <li>
        <h3><a href="/content-projection">Content projection with ng-content</a></h3>
      </li>
    </ul>
  `,
})
export class LinksComponent {
}

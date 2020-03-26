import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <h2>Design better components in Angular:</h2>
    <ul>
      <li>
        <h3>
          <a routerLink="/components-inheritance">Components Inheritance</a>
        </h3>
      </li>
      <li>
        <h3><a routerLink="/dynamic-component">Dynamic Component</a></h3>
      </li>

      <li>
        <h3><a routerLink="/compound-component">Advanced Patterns</a></h3>
      </li>

      <li>
        <h3><a>DI: the new Treeshakable Providers API</a></h3>
      </li>
      <li>
        <h3><a>Content projection with ng-content</a></h3>
      </li>
      <li>
        <h3><a>Custom Attribute directives</a></h3>
      </li>
      <li>
        <h3>
          <a>Custom Structural directives</a>
        </h3>
      </li>

      <li>
        <h3>
          <a>Control Value Accessor</a>
        </h3>
      </li>

      <li>
        <h3><a>Render Props</a></h3>
      </li>
      <li>
        <h3>
          <a>Data Provider Pattern</a>
        </h3>
      </li>
    </ul>
  `
})
export class HomeComponent {}

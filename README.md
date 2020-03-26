# HcAngularAdvanced

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

# DI (folder: di)

### TODO:

Refactor api-service.module using the new Treeshakable Providers API

The DemoComponent help only to display fake info of all injected service

# Content projection with ng-content (folder: content-projection)

### TODO

- Implement simple-card.final.component.ts to reproduce the card structure of simple-card.component.ts using ng-content. Open demo.component.ts to get the structure
  
> You will get some css issues but it is OK. We will not focus on it. We should only be able to see the data and the element correctly positioned.

# Custom Attribute Directive (folder: custom-directive)

### TODO

* Create a custom directive ```appHidden``` that will hide the element
* Create a custom directive ```appClassSetter``` that will bind the "detail" class in the element
* Create a custom directive ```appClick```  that will listen the click event in the element
* Create a custom directive ```appConfigurationAriaRole```  that will receive in Input the role value that will be bind into the [aria role attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role). By default, it will be set to 'link'.
  Directive usage should be for example: ```<span appConfigurationAriaRole="button">I AM</span>```

# Dynamic component (folder: dynamic-component)

### TODO

- Open the demo.component.ts and follow the comments.

# Custom Structural Directive (folder: custom-directive)

### TODO

- Create a custom directive ```appHasPermission``` that will remove/add the element based on a set of permission

# Custom value accessor (folder: controlValueAccessor)

### TODO

- Rewrite the date-picker component using control value accessor (have to work with formControl). Duplicate the component and call it ```app-date-picker-accessor```

# Render Props (folder: renderProps)

### TODO

- Create a render props to fetch Github API and render it
- Create a render props wrapper to HttpClient GET
- Rewrite GithubUser using HttpClientGet

# DataProvider Pattern (folder: data-provider-pattern)

### TODO

- Implement ```app-data-provider```
- Implement ```app-data-consumer```
- Implement ```DataProviderService```
- Make it working like below

```html
<app-data-provider key="theme" [data]="{ theme: 'dark' }">
  ...
    ...
      <app-data-consumer key="theme">
        <ng-template let-theme="theme">
          {{theme}} <-- 'dark'
        </ng-template>
      </app-data-consumer>
    ...
  ...
</app-data-provider>
```

Inspired by the repo of isaacplmann/ngx-data-provider

# Compound component (folder: compound component):

### TODO

* Refactor the Chat component using the compound pattern. So we will have as components:
  * Chat
  * ChatMessages
  * ChatInput
  * ChatButton
  
  It should look like that:
  ````html
  <app-chat-final>
      <app-chat-messages></app-chat-messages>
      <app-chat-input></app-chat-input>
      <app-chat-button></app-chat-button>
  </app-chat-final>
  ````
* Duplicate ````<app-chat-button></app-chat-button>```` in the template above, you will see that no add is perform when I click on the second button.
  
  Fix it by implementing the ````<app-chat-final-multiple>````
  It should look like that:
  `````html
  <app-chat-final-multiple>
        <app-chat-messages></app-chat-messages>
        <app-chat-input></app-chat-input>
        <app-chat-button></app-chat-button>
        Duplicated:<app-chat-button></app-chat-button>
  </app-chat-final-multiple>
  `````
* When finished, add ````<app-chat-embedded-button/>```` that contains a ChatButton, you will see that no add is perform when I click on the embedded button. Fix it using DI
  
  It should look like that:
  `````html
  <app-chat-final-di>
        <app-chat-messages-di></app-chat-messages-di>
        <app-chat-input-di></app-chat-input-di>
        <app-chat-button-di></app-chat-button-di>
        <app-chat-embedded-button></app-chat-embedded-button>
  </app-chat-final-di>
  `````


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

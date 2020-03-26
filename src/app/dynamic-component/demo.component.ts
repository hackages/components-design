import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Injector,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-dynamic-component-demo',
  template: `
    <h1>Dynamic component</h1>
    <p #paragraphe>I am a p</p>
    <ng-container #vc></ng-container>


    <ng-template #tpl> <!-- Will not be rendered -->
      <span>I am span in template</span>
    </ng-template>

    <ng-template #tplRendered> <!-- Will be rendered programmatically see Todo(tplRendered)-->
      <span>I am span in template</span>
    </ng-template>
  `
})
export class DemoComponent implements OnInit, AfterViewInit {
  // TODO: Query ElementRef of p element with the textContent='I am a p'
  paragraphe: ElementRef;

  // TODO: Query TemplateRef of tpl ng-template
  template: TemplateRef<any>;

  // TODO: Query TemplateRef of tplRendered ng-template
  templateRendered: TemplateRef<any>;

  // TODO: Query ViewContainerRef of vc ng-container
  vc: ViewContainerRef;

  constructor(
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit(): void {
  }

  todo() {
    // Todo(tplRendered): instantiate template of templateRendered TemplateRef and insert it in the view container (vc)

    // Todo: render dynamically the LinksComponent into the view container

    // TODO: when you finished these two todo above, rewrite it using ngTemplateOutlet and ngComponentOutlet
  }

  ngAfterViewInit(): void {
    this.todo();

    // Don't touch it, it will throw error if the exercises is not done
    this.equals(
      this.paragraphe.nativeElement,
      'I am a p',
      this.log('paragraphe')
    );

    if (this.template.elementRef.nativeElement.nodeName !== '#comment') {
      throw new Error(this.log('template'));
    }
  }

  equals(nativeElement: any, textContent: string, errorMessage) {
    if (nativeElement.textContent === textContent) {
      return;
    }
    throw new Error(errorMessage);
  }

  log(variableName) {
    return `${variableName} variable is not query correclty`;
  }
}

import {Directive, ElementRef} from '@angular/core';

/*
ПОка нигде не применяется.
В разработке...
 */

@Directive({
  selector: '[required-field]'
})
export class RequiredFieldDirective{

  constructor(private elementRef: ElementRef){

    this.elementRef.nativeElement.innerText = "new";
  }
}

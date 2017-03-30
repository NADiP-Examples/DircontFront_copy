import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[required-field]'
})
export class RequiredFieldDirective{

  constructor(private elementRef: ElementRef){

    this.elementRef.nativeElement.innerText = "new";
  }
}

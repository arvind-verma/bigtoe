import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[validEmail]'
})
export class ValidEmailDirective {
  constructor(private _el: ElementRef) { }
  
  @HostListener('keydown', ['$event']) onKeyDown(event:KeyboardEvent) {
    var keyCode = event.which || event.keyCode; // I safely get the keyCode pressed from the event.
    var keyCodeChar = String.fromCharCode(keyCode); // I determine the char from the keyCode.


    // If the keyCode char does not match the allowed Regex Pattern, then don't allow the input into the field.
    if (!keyCodeChar.match(new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, "i"))) {
      event.preventDefault();
      return false;
  }
  }

}
